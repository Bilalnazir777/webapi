import express, { Application, Request, Response, NextFunction, application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";
import cors from "cors";
import { dbmongo } from "./config/mongodb.conn";
import {mainapi} from "./route"
import { Server } from "http";
const health = require('@cloudnative/health-connect');
let healthcheck = new health.HealthChecker();
import { mongocluster,mongodbname,mongo_pass,mongo_user_name } from "./util/constant";
let server: Server | null = null;
const PORT = process.env.PORT || 3000;
function initApplication(): express.Application {
    new dbmongo().connect('localhost', 'orcalodb');
    const app = express()
    app.use(express.json())
    app.use(morgan("tiny"))
    app.use(express.static("public"))
    app.use("/swagger" , swaggerUi.serve, swaggerUi.setup(undefined, {
        swaggerOptions: {
            url : "/swagger.json"
        }
    }))
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(mainapi);
    app.use(
        (err:any , req:Request, res:Response, next:NextFunction)=>{
            res.locals.message = err.message
            const status = err.statuscode || 500
            res.locals.status= status
            res.locals.error = req.app.get('env')==='development'? err:{};
            res.status(status)
            return res.json({
                error :{
                    message : err.message
                }
            })

            
        }
    )
    app.use('/health', health.LivenessEndpoint(healthcheck))
    app.use('/ready', health.ReadinessEndpoint(healthcheck));
    return app
}
function start(){
    const app = initApplication()

    server = app.listen(PORT,()=>{
        console.log(`server sterted on port" ${PORT}`);
        
    })

}
//starting application
start()