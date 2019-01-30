import * as Koa from "koa";
import * as http from "http";
import 'reflect-metadata';
import Router from './extends/router';

const app = new Koa();

const router = Router.init();

app.use(router.routes()).use(router.allowedMethods());

const server = http.createServer(app.callback());

server.listen(5000,()=>{
    console.log('启动成功5000');
});