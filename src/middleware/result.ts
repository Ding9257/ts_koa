import {Context, Middleware} from 'koa';

export function result(): Middleware {
    return async (ctx: Context, next: () => Promise<any>) => {
        try {
            ctx.body = await next();
        } catch (err) {
            ctx.body = err.message
        }
    };
}
