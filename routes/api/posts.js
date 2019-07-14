const router = require("express").Router();
const postcontroller = require("../../controller/post-controller");


// Matches with "api/posts/"
router.route("/")

   .get(postcontroller.getPosts)




// Matches with "api/posts/:id"
router.route("/:id")

   .post(postcontroller.addPost)

   


module.exports = router;

