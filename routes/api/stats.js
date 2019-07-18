const router = require("express").Router();
const statcontroller = require("../../controller/stat-controller");


// Matches with "api/stats/"
router.route("/")

   .get(statcontroller.getAllstats)
   .post(statcontroller.addStat);




// Matches with "api/stats/:id"
router.route("/:id")

   // .put(statcontroller.editstat)

   .get(statcontroller.getUserStats)

 



module.exports = router;


