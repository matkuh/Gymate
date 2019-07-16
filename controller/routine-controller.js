
const db = require("../models");

module.exports = {


  getAllRoutines: function (req, res) {
    db.Routine.findAll({}).then(function(dbRoutine) {
      res.json(dbRoutine);
    });

  },



  editUserRoutine: function (req, res) {
    db.Routine.update(
      {
        routine: req.body.routine,
        hoursChecked: req.body.hoursChecked
      },
      {
        where: {UserId: req.params.id, 
        dayOfTheWeek: req.params.day}
      })
    .then(function(dbRoutine)
    {
      res.json(dbRoutine);
    });
  },



  updateUserComplete: function (req, res) {
    db.Routine.update(
      {
        completed: req.body.completed    
      },
      {
        where: {UserId: req.params.id, 
        dayOfTheWeek: req.params.day}
      })
    .then(function(dbRoutine)
    {
      res.json(dbRoutine);
    });
  },


  getUserRoutines: function (req, res) {
    db.Routine.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function(dbRoutine) {
      res.json(dbRoutine);
    });

  },



//Add new routine for specific user
   addRoutine: function (req, res) {
    db.Routine.create({
     dayOfTheWeek: parseInt(req.body.dayOfTheWeek),
     routine: req.body.routine,
     UserId: req.body.UserId}).then(function(dbRoutine) {
      res.json(dbRoutine);
    });
  },


   deleteRoutine: function(req, res) {

    db.Routine.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRoutine) {
      res.json(dbRoutine);
    });


}

}