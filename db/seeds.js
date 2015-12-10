require("./schema");
var k9Database = require("./connection");
var mongoose = require("mongoose");
// mongoose.connect(process.env.MONOGOLAB_URI  || 'mongodb://localhost/k9-express');



// Require the connection to data files.
var data = {
  markets: require("./k9"),
  vendors: require("./location"),
};
