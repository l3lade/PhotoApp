var restful = require('node-restful');
var mongoose = restful.mongoose;
var userSchema = new mongoose.Schema({
    firstName: String,
    email: String,
    lastName: String,
    age: Number,
    sex: String,
    nationality: String,
    locale: String,
    provider: String,
    providerId: Number,
    isLocked: Boolean,
    isActive: Boolean,
    type: String,
    phones: [{
            type: String,
            number: String
        }],
    address: [{
            type: String,
            text: String,
            state: String,
            country: String,
            pincode: String
        }],
    roles: [{
            role: String
        }],
    companies: [{
            name: String
        }],
    createAt: {
        type: Date,
        default: Date.now
    },
    createdBy: String
});
var usersModel = restful.model('users', userSchema).methods(['get', 'post',
    'delete', 'put'
]);
module.exports = usersModel;
