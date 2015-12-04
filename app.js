var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set("view engine", "hbs");

app.get("/", function(req, res){
 res.render("index.hbs");
});

// app.use("/k9", require("./controllers/k9s.js"));
// app.use("/location", require("./controllers/locations.js"));


app.listen(3000, function(){
  console.log("Wheee! I'm working!");
});
