/**
 * Created by hussain on 27/10/17.
 */
var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    local: {
        email : String,
        password : String
    }
});

module.exports = mongoose.model('User', userSchema);