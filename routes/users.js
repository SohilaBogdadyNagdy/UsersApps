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

     Save the new model instance, passing a callback
    _instance.save(function (err) {
      if (err) return handleError(err);
      res.status(201).send({"status", "success", "message": "new user created"})
    });
});


module.exports = router;
