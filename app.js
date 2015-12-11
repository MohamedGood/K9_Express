var express      = require('express');
var session      = require('express-session');
var flash        = require('connect-flash');
var mongoose     = require('mongoose');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan       = require('morgan');

mongoose.connect(process.env.MONOGOLAB_URI || 'mongodb://localhost/k9');
var app          = express();

var passport     = require('passport');
require('./config/passport')(passport)

app.use(express.static(__dirname + '/public'));
app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'k9',resave:true,saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(flash())
app.use(function (req, res, next) {
  global.currentUser = req.user;
  res.locals.currentUser = req.user;
  next();
});

var usersController = require('./controllers/users')

app.get("/",function(req, res){
  console.log(req.user);
  res.render("index.hbs");
});

app.get("/signup",usersController.getSignup)
app.post("/signup",usersController.postSignup)
app.get("/login",usersController.getLogin)
app.post("/login",usersController.postLogin)
app.get('/logout', usersController.getLogout);

var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});
