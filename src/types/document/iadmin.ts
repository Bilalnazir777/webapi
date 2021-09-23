import { Document } from "mongoose";
export interface iadmin extends Document{
    _id:string;
    firstname:string;
    lastname:string;
    cell:string;
    designation:string;
    address:string;
    joindate:string;
    createdat?:string;
    updatedat?:string;

}