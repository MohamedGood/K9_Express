require("./schema");
var k9Database = require("./connection");
var mongoose = require("mongoose");
var db = mongoose.coonnection


// Require the connection to data files.
var data = {
  markets: require("./k9"),
  vendors: require("./location"),
};
