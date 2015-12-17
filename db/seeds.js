require("./schema");
var k9Database = require("./connection");
var mongoose = require("mongoose");
var db = mongoose.connection;
var markets = require("./login")
var vendor = require("./signup")
//ERICA: Markets? Vendors? What are you trying to do here?
// mongoose.connect(process.env.MONOGOLAB_URI  || 'mongodb://localhost/k9-express');

// db.once("open", function(){
//   console.log("Connected to the database.");




// Require the connection to data files.
// var data = {
//   markets: require("./k9"),
//   vendors: require("./location"),
// };
