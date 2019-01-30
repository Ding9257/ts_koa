import * as Koa from "koa";
import * as glob from 'glob';
import * as KoaRouter from 'koa-router';
import {join} from 'path';

const router = new KoaRouter();

export default class Router {
    static routerSet: Set<{
        method: string;
        path: string[];
        middlewares: Koa.Middleware[];
    }> = new Set();

    static init() {
        glob.sync(join(__dirname, "./../controller/**/*.js")).forEach(require);

        // 加载路由
        for (const {method, path, middlewares} of this.routerSet) {
            router[method](path, ...middlewares);
        }

        router.all('*', (ctx: Koa.Context) => {
            ctx.status = 404;
            ctx.error('Router Not Found');
        });

        return router;
    }
}