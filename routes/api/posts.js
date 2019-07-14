const router = require("express").Router();
const postcontroller = require("../../controller/post-controller");


// Matches with "api/posts/"
router.route("/")

   .get(postcontroller.getAllposts);




// Matches with "api/posts/:id"
router.route("/:id")

   .post(postcontroller.addPost)

   .put(postcontroller.editPost)

   .get(postcontroller.getPosts)

   .delete(postcontroller.deletePost);



module.exports = router;

