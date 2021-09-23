export default class errorhandler extends Error{
     statuscode :any;
     message :any
     constructor(statuscode:any,message:any){
         super()
         this.statuscode=statuscode;
         this.message=message
     }
}