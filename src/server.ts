///<reference path="../typings/index.d.ts"/>

'use strict';

//Dependencies
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';
import * as config from 'config';

let restful = require('node-restful')
let mongoose = restful.mongoose;
let apiRouter = require('./routes/api-router');
let mongoUrl = config.get('dbConfig.url');

class Server{

    private app:express.Application;

    private AddMiddlewares():void{
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.urlencoded({
            extended : true
        }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.json({
            type: 'application/vnd.api+json'
        }));
        this.app.use(methodOverride());

    }

    private AddRoutes():void{
        this.app.use('/api', apiRouter);
    }    

    public Start(): void{
        this.AddMiddlewares();
        this.AddRoutes();
        mongoose.connect(mongoUrl);
        this.app.listen(3000);
    }

    constructor(){
        this.app = express();
    }

}

let server = new Server();
server.Start();