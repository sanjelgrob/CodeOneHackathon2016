var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/dashboard', function(req, res) {
  res.render('./users/dashboard');
});

module.exports = router;
