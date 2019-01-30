import {Context} from 'koa';
import util from './../lib/utils/util'

const auth = async (ctx: Context, next: any) => {
    let token: string = ctx.header.token;
    if (!util.isEmpty(token)) {
        return ctx.body = token;
    }
    await next();
}

export default auth;