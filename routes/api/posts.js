const router = require("express").Router();
const postcontroller = require("../../controller/post-controller");


// Matches with "api/posts/"
router.route("/")

   .get(postcontroller.getPosts)
   .post(postcontroller.addPost)




// // Matches with "api/posts/:id"
// router.route("/")


module.exports = router;

