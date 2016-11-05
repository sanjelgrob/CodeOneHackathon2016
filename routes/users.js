var express = require('express');
var router = express.Router();

router.post('/login', function (req, res) {
  console.log(req);
  if(req.body.name == 'admin' && req.body.password == 'admin') {
    res.redirect('/dashboard');
  }
    });

module.exports = router;
