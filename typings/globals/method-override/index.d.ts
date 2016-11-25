// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/1dc78748609a0d41e1dd2cbef975f2b2dbfba7d9/method-override/method-override.d.ts
declare namespace Express {
    export interface Request {
        originalMethod?: string;
    }
}

declare module "method-override" {
    import express = require('express');

    namespace e {
        export interface MethodOverrideOptions {
            methods: string[];
        }
    }


    function e(getter?: string | ((req: express.Request, res: express.Response) => string), options?: e.MethodOverrideOptions): express.RequestHandler;


    export = e;
}