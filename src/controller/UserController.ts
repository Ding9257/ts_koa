import {Context} from "koa";
import * as router from './../extends/router_decorator'
import {Auth} from './../extends/decorator'

export default class UserController {

    @router.get('/user')
    get(ctx: Context) {
        return ctx.body = "ok";
    }

    @router.get('/getToken')
    @Auth()
    static getToken(ctx:Context){
        let token = ctx.headers.token;
        return ctx.body = token;
    }

}