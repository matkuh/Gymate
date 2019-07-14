const router = require("express").Router();
const postscontroller = require("../../controller/post-controller");


// Matches with "api/posts/"
router.route("/")

   .get(postscontroller.getAllposts);




// Matches with "api/posts/:id"
router.route("/:id")

   .post(postscontroller.addPost)

   .put(postscontroller.editPost)

   .get(postscontroller.getPosts)

   .delete(postscontroller.deletePost);



module.exports = router;

