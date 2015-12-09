var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose')
var session = require('express-session')
var usersController = require('./controllers/users')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set("view engine", "hbs");
app.use(session({secret:'k9'}))

app.get("/", function(req, res){
 res.render("index.hbs");
});

app.get("/signup", function(req, res){
 res.render("signup.hbs");
});

app.get("/login", function(req, res){
 res.render("login.hbs");
});

app.post("/signup",usersController.postSignup)



// app.use("/k9", require("./controllers/k9s.js"));
// app.use("/location", require("./controllers/locations.js"));




app.listen(3000, function(){
  console.log("Wheee! I'm working!");
});
