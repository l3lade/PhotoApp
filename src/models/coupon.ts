var restful = require('node-restful');
var mongoose = restful.mongoose;


var couponSchema = new mongoose.Schema({
  code: String,
  advertiser: String,
  validFrom: Date,
  validTo: Date,
  createAt: {
    type: Date,
    default: Date.now
  },
  createdBy: String
});

var couponModel = restful.model('coupons', couponSchema).methods([
  'get', 'post',
  'delete', 'put'
]);



module.exports = couponModel;
