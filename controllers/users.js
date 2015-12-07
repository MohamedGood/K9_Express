User.methods.encrpyt = function(password) {
  return bcrypt.hashsync(password, bcrypt.genSaltSync(8), null);
};
