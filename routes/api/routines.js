const router = require("express").Router();
const routinecontroller = require("../../controller/routine-controller");


// Matches with "api/routines/"
router.route("/")

   .get(routinecontroller.getAllRoutines);




// Matches with "api/routines/:id"
router.route("/:id")

   .put(routinecontroller.editRoutine)

   .get(routinecontroller.getUserRoutines)

   .post(routinecontroller.addRoutine)

   .delete(routinecontroller.deleteRoutine);



module.exports = router;



