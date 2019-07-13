// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Character = require("../models/character.js");

// Routes
// =============================================================


//get aws keys
require("dotenv").config();
var userController = requier("../controllers/user-controller")





module.exports = function (app) {
    app.post("/test", function (req, res) {
      userController.update(req, res)
        
    });

    app.delete("/test", function(req, res){
      userController.delete(req,res)
    })
  };


