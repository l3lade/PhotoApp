///<reference path="../typings/index.d.ts"/>
'use strict';
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var config = require('config');
var restful = require('node-restful');
var mongoose = restful.mongoose;
var apiRouter = require('./routes/api-router');
var mongoUrl = config.get('dbConfig.url');
var Server = (function () {
    function Server() {
        this.app = express();
    }
    Server.prototype.AddMiddlewares = function () {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.json({
            type: 'application/vnd.api+json'
        }));
        this.app.use(methodOverride());
    };
    Server.prototype.AddRoutes = function () {
        this.app.use('/api', apiRouter);
    };
    Server.prototype.Start = function () {
        this.AddMiddlewares();
        this.AddRoutes();
        mongoose.connect(mongoUrl);
        this.app.listen(3000);
    };
    return Server;
}());
var server = new Server();
server.Start();
