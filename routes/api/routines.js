const router = require("express").Router();
const routinescontroller = require("../../controller/routinescontroller");


// Matches with "api/routines/"
router.route("/")

   .get(routinescontroller.getAllRoutines);




// Matches with "api/routines/:id"
router.route("/:id")

   .put(routinescontroller.editRoutine);

   .get(routinescontroller.getUserRoutines)

   .post(routinescontroller.addRoutine);

   .delete(routinescontroller.deleteRoutine);



module.exports = router;



