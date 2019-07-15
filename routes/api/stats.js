const router = require("express").Router();
const statcontroller = require("../../controller/stat-controller");


// Matches with "api/stats/"
router.route("/")

   .get(statcontroller.getAllstats);




// Matches with "api/routines/:id"
router.route("/:id")

   // .put(statcontroller.editstat)

   .get(statcontroller.getUserStats)

   .post(statcontroller.addStat)



module.exports = router;


