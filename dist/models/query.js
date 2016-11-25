var restful = require('node-restful');
var mongoose = restful.mongoose;
var querySchema = new mongoose.Schema({
    advertiser: String,
    query: String,
    isActive: Boolean,
    createAt: {
        type: Date,
        default: Date.now
    },
    createdBy: String
});
var queryModel = restful.model('queries', querySchema).methods([
    'get', 'post',
    'delete', 'put'
]);
module.exports = queryModel;
