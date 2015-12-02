var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "hbs");

app.listen(3000, function(){
  console.log("Wheee! I'm working!");
});
