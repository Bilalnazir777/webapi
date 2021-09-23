import { adminschema } from '../model/admin.model'
import {iadmin} from '../types/document/iadmin'

export class mainadmin{
    constructor(){

    }
    getadmin(_id:string){
        return adminschema.findById(_id)
    }
    saveadmin(admin:iadmin){
        return new adminschema(admin).save()
    }
    updateadmin(admin:iadmin){
        return adminschema.findByIdAndUpdate(admin._id,admin,{
            new:true
        })
    }
    deleteadmin(_id:string){
        return adminschema.findByIdAndDelete(_id)
    }
    getadminlist(){
        return adminschema.find()
    }


}