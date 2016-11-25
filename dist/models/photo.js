var restful = require('node-restful');
var mongoose = restful.mongoose;
var photoSchema = new mongoose.Schema({
    photoName: String,
    url: String,
    secureUrl: String,
    user: String,
    advertiser: String,
    createAt: {
        type: Date,
        default: Date.now
    },
    createdBy: String
});
var photoModel = restful.model('photos', photoSchema).methods(['get', 'post',
    'delete', 'put'
]);
module.exports = photoModel;
