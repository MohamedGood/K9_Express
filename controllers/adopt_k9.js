var express = require("express");
var router = express.Router();
var adopt = require("../models/k9/connection").models.k9;


function error(response, message){
  response.status(500)
  response.json({error: message});
}

router.get("/", function(req, res){
  k9.findAll({}).poulate("location", "name").then(function(k9){
    res.json(location)
  });
});
