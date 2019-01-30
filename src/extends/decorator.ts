import {Context, Middleware} from 'koa';
import {toArray} from './../common/util';

function middlewareDecorator(mw: Middleware) {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        const values = toArray(mw, Reflect.get(target, name)); // 把中间件插入数组开头
        Reflect.set(target, name, values);
        return descriptor;
    };
}

export function Auth() {
    return middlewareDecorator((ctx: Context, next: Function) => {
        let token = ctx.headers.token;
        console.log(token);
        if (token) {
            return ctx.body = 2
        }
        return next();
    });
}

export function Path(path: string, authFunc?: Function) {
    return (target: any, name: string, decorator: TypedPropertyDescriptor<Function>) => {
        const values = toArray(authFunc, Reflect.get(target, name)); // 把中间件插入数组开头
        Reflect.set(target, name, values);
        return decorator;
    }
}
