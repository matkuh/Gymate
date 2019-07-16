
const db = require("../models");

module.exports = {


  getAllstats: function (req, res) {
    db.Stat.findAll({}).then(function(dbStat) {
      res.json(dbStat);
    });

  },



  // editStat: function (req, res) {
  //   db.Stat.update(
  //     {
  //       weight: req.body.weight,
  //       hoursChecked: req.body.hoursChecked,
  //       poundsLossed: req.body.poundsLossed
  //     },
  //     {
  //       where: {id: req.params.id }
  //     })
  //   .then(function(dbRoutine)
  //   {
  //     res.json(dbRoutine);
  //   });
  // },




  getUserStats: function (req, res) {
    db.Stat.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function(dbStat) {
      res.json(dbStat);
    });

  },



//Add new routine for specific user
   addStat: function (req, res) {
    db.Stat.create({
     weight: req.body.weight,
     hours: req.body.hours,
     poundsLossed: req.body.poundsLossed,
     bmi: req.body.poundsLossed,
     UserId: req.body.UserId
   }).then(function(dbStat) {
      res.json(dbStat);
    });
  },



}