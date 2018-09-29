var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    id: Schema.Types.ObjectId,
    username: {
      type : String,
      required : [true, "user name is already taken"],
      unique: true
    },
    firstName: {
       type: String,
       required : true
    },
    lastName : {
       type: String,
       required : true
    },
    email: {
      type: String,

    },
    avatar: String,
    password:{
       type: String,
       minlength : 6
    }

});

module.exports = mongoose.model('Users', UserModelSchema );
