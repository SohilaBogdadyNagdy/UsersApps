var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    avatar: String
});

var _model = mongoose.model('UsersModel', UserModelSchema );
