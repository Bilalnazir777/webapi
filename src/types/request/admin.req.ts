export interface savereqadmin{

    firstname:string;
    lastname:string;
    cell:string;
    designation:string;
    address:string;
    joindate:string
}
export interface updatereqadmin{
    _id:string;
    firstname:string;
    lastname:string;
    cell:string;
    designation:string;
    address:string;
    joindate:string
}
export interface deleteadmin{
     
    id:string
}
export interface getadmin{

    id:string
}