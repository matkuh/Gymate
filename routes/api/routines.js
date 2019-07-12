const router = require("express").Router();
const routinescontroller = require("../../controller/routinescontroller");

router.route("/api/users")

   .get(routinescontroller.getAllRoutines);

router.route("/api/users/:id")

   .put(routinescontroller.editRoutine);

router.route("/api/routine/:id")

   .get(routinescontroller.getUserRoutines)

   .post(routinescontroller.addRoutine);


module.exports = router;