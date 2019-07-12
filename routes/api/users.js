const router = require("express").Router();
const usercontroller = require("../../controller/usercontroller");


// equivalent to "/api/users"
router.route("/")

    .get(usercontroller.getAllUsers);

router.route("/:id")

    .put(usercontroller.editUsers);

module.exports = router;