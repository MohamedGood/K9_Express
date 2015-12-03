var express = require("express");
var router = express.Router();
var adopt = require("../db/k9/connection").models.k9;


function error(response, message){
  response.status(500)
  response.json({error: message});
}

router.get("/k9", function(req, res){
  k9.findAll().then(function(k9){
    res.render("k9/index", {k9: k9});
  });
});

app.get('/', function(req, res){
  res.render('adopt_k9.js');
});
