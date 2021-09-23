import express from 'express';
import { admincontroller } from '../controller/admin.controller';
import { iadmin } from '../types/document/iadmin';
import { deleteadmin, getadmin, savereqadmin, updatereqadmin } from '../types/request/admin.req';
import { saveupdateresadmin } from '../types/response/admin.response';
import customeerror from '../util/error';

export class adminroute{
    router: express.Router;
    constructor(){
        this.router=express.Router()
        this.routes()

    }
    routes(){
        this.router.post('/getadmin' , async(req,res,next)=>{
            try{
             const getreq:getadmin =req.body
             const admin:saveupdateresadmin = await new admincontroller().getadmin(getreq)   
            res.send(admin)
            }catch(error){
                next(error)
            }
        })
        this.router.post('/saveadmin' , async(req,res,next)=>{
            try{
                const admin:savereqadmin =req.body
                const newadmin:saveupdateresadmin = await new admincontroller().saveadmin(admin)
                res.json({
                    message:newadmin
                })

            }
            catch(error){
                next(error)
            }
        })
        this.router.put('/updateadmin' , async(req,res,next)=>{
            try{
                const admin:updatereqadmin =req.body
                const updatedadmin:saveupdateresadmin = await new admincontroller().updateadmin(admin)
                res.json({
                    message:updatedadmin
                })
            }
            catch(error){
                next(error)
            }
        })
        this.router.delete("/deleteadmin", async(req,res,next)=>{
            try{
                const delreq:deleteadmin = req.body
                const deletedadmin = await new admincontroller().deleteadmin(delreq)
                res.json({
                    message:'admin deleted'
                })
            }
            catch(error){
                next(error)
            }
        })
        this.router.post('/getadminlist', async(req,res,next)=>{
            try{
                const adminlist:saveupdateresadmin[] = await new admincontroller().getadminlist()
                res.json({
                    result:adminlist
                })
            }
            catch(error){
                next(error)
            }
        })
    }
}
export const adminrouteapi = new adminroute().router