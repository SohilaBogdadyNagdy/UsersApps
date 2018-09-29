var express = require('express');
var users = require('../models/users')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("list users API");
  res.json(users);
});



module.exports = router;
