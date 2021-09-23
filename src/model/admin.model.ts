import {Schema,model} from "mongoose"
import { iadmin }  from "../types/document/iadmin";
const iadminschema = new Schema(

{   firstname:{type:String},
    lastname:{type:String},
    cell:{type:String},
    designation:{type:String},
    address:{type:String},
    joindate:{type:String},
},

{
     timestamps : true
}
    )

export const adminschema = model<iadmin>('iadminschema',iadminschema)