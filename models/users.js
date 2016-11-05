var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'admin'
    },
    password: {
        type: String,
        default: 'admin'
    }
});

var User = module.exports = mongoose.model('User', UserSchema);