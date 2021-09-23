import express from 'express';
import { adminrouteapi } from "./admin.route";
export class mainrouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes(){
        this.router.use('/admin', adminrouteapi)
    }
}
export const mainapi = new mainrouter().router