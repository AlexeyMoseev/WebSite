var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(`req.body=${JSON.stringify(req.body)}`)
  var email = req.body.email
  var passwords = req.body.password
  // var validEmail = email && email.includes("@");
  var validEmail = email && /.+\@.+/i.test(email);
  var validPassword = passwords && passwords.length === 2 && passwords[0] === passwords[1];

  if (validEmail && validPassword) {
  	req.flash('message', 'Успешно');
    res.redirect('/');
  } else {	
  	req.flash('message', 'Ошибка');
    res.status(422).redirect('/');
  }
});

module.exports = router;
