var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var message = req.flash('message')
  res.render('index', { title: 'WEB', message: message });
});

module.exports = router;
