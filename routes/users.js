var express = require('express');
var router = express.Router();

router.post('/login', function (req, res) {
  console.log(req);
  if(req.body.name == 'admin' && req.body.password == 'admin') {
    res.redirect('/index');
  }
    });

router.get('/rewards', function (req, res) {
    res.render('./users/rewards');
});

router.get('/accounts', function (req, res) {
  res.render('./users/accounts');
});

router.get('/loans', function (req, res) {
  res.render('./users/loans');
});

router.get('/goals', function (req, res) {
  res.render('./users/goals');
});

router.get('/offers', function (req, res) {
  res.render('./users/offers');
});

router.get('/about', function (req, res) {
  res.render('./users/about');
});

router.get('/faq', function (req, res) {
  res.render('./users/faq');
});

router.get('/contact', function (req, res) {
  res.render('./users/contact');
});

module.exports = router;
