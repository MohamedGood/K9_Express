var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models/user');

module.exports = function(passport) {
  passport.use('local-signup', new LocalStrategy{(
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, callback) {
    User.findONe({ 'local.email' : email }, fucntion(err, user) {
      if (err) return callback(err);
    }
if (user) {
  return callback(null, false, req.flash('signupMessage', 'This email is already used.'));

} else {

    var NewUser        = new User();
    NewUser.local.email = email;
    newUser.local.password = newUser.encrypt(password):

    newUser.save(function(err) {
      if (err)throw err;
      return callback(null, newUser);
    });
     }
  });
}));
