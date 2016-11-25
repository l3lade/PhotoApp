///<reference path="../../typings/index.d.ts"/>

import * as express from 'express';
let apiRouter = express.Router();

let userModel = require('../models/user');
let photoModel = require('../models/photo');
let couponModel = require('../models/coupon');
let queryModel = require('../models/query');
let orderModel = require('../models/order');

userModel.register(apiRouter, '/users');
photoModel.register(apiRouter, '/photos');
couponModel.register(apiRouter, '/coupons');
queryModel.register(apiRouter, '/queries');
orderModel.register(apiRouter, '/orders');


module.exports = apiRouter;
