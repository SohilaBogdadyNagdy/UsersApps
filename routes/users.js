var express = require('express');
var users = require('../models/users')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("list users API");
  users.find( function(err, all_users){
      if (err) return handleError(err);
      res.status(200).send({"users": all_users});
  });

});

router.post("/", function(req, res, next){

    console.log("Create new user");
    var data = req.body;
    console.log(data);
    var _instance = new users(data);

    _instance.save(function (err) {
      if (err) return handleError(err);
      res.status(201).send({"status": "success", "message": "new user created"})
    });
});

/* GET  one user . */
router.get('/:user_id', function(req, res, next) {
  console.log("get one user API");
  var user_id = req.params.user_id;
  console.log(user_id);
  users.find( {_id: user_id },function(err, _user){
      if (err) return handleError(err);
      res.status(200).send({"users": _user});
  });

});

router.delete('/:user_id', function(req, res, next) {
  console.log("delete user API");
  var user_id = req.params.user_id;
  console.log(user_id);
  users.findOneAndRemove( { _id: user_id },function(err, _user){
      if (err) return handleError(err);
      res.status(204).send({"status":"success", "message": "user deleted"});
  });

});

module.exports = router;
