import {connect , connection} from "mongoose";
export class dbmongo{
    constructor(){

    }
    connect(h:string, dbname:string, u?:string, pass?:string, p?:number){
        let connectionuri = `mongodb://${h}/${dbname}`;
        console.log(connectionuri)
        if(u!=undefined && pass!=undefined){
            connectionuri = `mongodb+srv://${u}:${pass}@${h}/${dbname}`
        }
        connect(connectionuri, (err:any)=>{
             if(err){
                 console.log(err);
                 console.log("database connection failed");
                 
             }
             else{
                 console.log("database connected")
             }
        });
    }

}
export const monstatconnection = connection.readyState;
