var restful = require('node-restful');
var mongoose = restful.mongoose;
var orderSchema = new mongoose.Schema({
    user: String,
    photoId: [{
            id: Number
        }],
    advertisers: [{
            name: String
        }],
    createAt: {
        type: Date,
        default: Date.now
    },
    createdBy: String
});
var orderModel = restful.model('orders', orderSchema).methods([
    'get', 'post',
    'delete', 'put'
]);
module.exports = orderModel;
