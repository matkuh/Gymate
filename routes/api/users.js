const router = require("express").Router();
const usercontroller = require("../../controller/user-controller");


// equivalent to "api/users"
router.route("/")

    .get(usercontroller.getAllUsers);

router.route("/:id")

	.post(usercontroller.addUser)

	.get(usercontroller.getUser)

    .put(usercontroller.editUser);

   

router.route("/test")
 	.post(usercontroller.updatePhoto);




module.exports = router;







