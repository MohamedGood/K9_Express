var express = require("express");
var router = express.Router();
var adopt = require("../models/location/connection").models.k9;


function error(response, message){
  response.status(500)
  response.json({error: message});
}
//ERICA: k9? Be careful with copy/paste
router.get("/", function(req, res){
  k9.findAll({}).populate("location", "name").then(function(k9){
    res.json(location)
  });
});
