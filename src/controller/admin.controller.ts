import { iadmin} from '../types/document/iadmin'
import {mainadmin} from '../repositries/admin.repositries'
import customeerror from '../util/error'
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { saveupdateresadmin } from '../types/response/admin.response';
import { deleteadmin, getadmin, savereqadmin,updatereqadmin } from '../types/request/admin.req';


@Route('admin')
@Tags('admin')

export class admincontroller{
    constructor(){

    }
    @Post ("/getadmin")
    async getadmin (@Body() getreq:getadmin) : Promise<saveupdateresadmin>{
        const admin:any = await <any>new mainadmin().getadmin(getreq.id)
        if(admin===null) throw new customeerror (404,"admin not found")
        return <saveupdateresadmin>admin
    }
    @Post("/saveadmin")
    async saveadmin (@Body() admin:savereqadmin): Promise<saveupdateresadmin>{
     const new_admin:any = await <any> new mainadmin().saveadmin(<iadmin>(admin))
     return <saveupdateresadmin>(new_admin)
    }
    @Put("/updateadmin")
    async updateadmin (@Body() admin:updatereqadmin) : Promise<saveupdateresadmin>{
        const update_admin = await new mainadmin().updateadmin(<iadmin>(admin))
        if(update_admin===null){
            throw new customeerror(404,"admin not updated") 
        }
        return <saveupdateresadmin>update_admin
    }
    @Delete ("/deleteadmin")
    @SuccessResponse(200,"admin deleted")
    async deleteadmin(@Body() delreq:deleteadmin){
        return await new mainadmin().deleteadmin(delreq.id)
    }
    @Post("/getadminlist")
    async getadminlist() : Promise<saveupdateresadmin[]>{
        const admin : any = await new mainadmin().getadminlist()
        return <saveupdateresadmin[]>(admin)
    }

}