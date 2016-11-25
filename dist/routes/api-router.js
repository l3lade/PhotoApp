///<reference path="../../typings/index.d.ts"/>
"use strict";
var express = require('express');
var apiRouter = express.Router();
var userModel = require('../models/user');
var photoModel = require('../models/photo');
var couponModel = require('../models/coupon');
var queryModel = require('../models/query');
var orderModel = require('../models/order');
userModel.register(apiRouter, '/users');
photoModel.register(apiRouter, '/photos');
couponModel.register(apiRouter, '/coupons');
queryModel.register(apiRouter, '/queries');
orderModel.register(apiRouter, '/orders');
module.exports = apiRouter;
