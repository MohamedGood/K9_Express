var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var hbs   = require("hbs");
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
require('./config/passport')(passport)
var usersController = require('./controllers/users')

mongoose.connect(process.env.MONOGOLAB_URI  || 'mongodb://localhost/k9-express');


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



var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});
