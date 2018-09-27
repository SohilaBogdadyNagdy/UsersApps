var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    id: Schema.Types.ObjectId,
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    avatar: String
});

var _model = mongoose.model('Users', UserModelSchema );
