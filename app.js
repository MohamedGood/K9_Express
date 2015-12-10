var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose')
var session = require('express-session')
var flash = require('connect-flash')
var hbs = require("hbs");
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');
require('./config/passport')(passport)
var usersController = require('./controllers/users')

mongoose.connect('mongodb://localhost/local-authentication-with-passport');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set("view engine", "hbs");
app.use(session({secret:'k9',resave:true,saveUninitialized:true}))
app.use(passport.initialize())
app.use(flash())

app.get("/", function(req, res){
  res.render("index.hbs");
});

app.get("/signup", function(req, res){
  res.render("signup.hbs");
});

app.get("/login", function(req, res){
  res.render("login.hbs");
});

//app.post("/signup",usersController.postSignup)

app.use(function (req, res, next) {
  global.currentUser = req.user;
  res.locals.currentUser = req.user;
  next();
});

var routes = require('./config/routes');
app.use(routes);



// app.use("/k9", require("./controllers/k9s.js"));
// app.use("/location", require("./controllers/locations.js"));




app.listen(3000, function(){
  console.log("Wheee! I'm working!");
});
