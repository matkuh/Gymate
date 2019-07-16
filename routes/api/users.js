const router = require("express").Router();
const usercontroller = require("../../controller/user-controller");

require("dotenv").config();


// equivalent to "api/users"
router.route("/")

    .get(usercontroller.getAllUsers)

    .post(usercontroller.addUser);

router.route("/:id")

	.get(usercontroller.getUser)

    .put(usercontroller.editUser);

router.route("/email/:email")

	.get(usercontroller.getUserEmail);


router.route("/survey")
 	.post(usercontroller.updatePhoto);




module.exports = router;







