const router = require("express").Router();
const postscontroller = require("../../controller/postscontroller");


// Matches with "api/posts/"
router.route("/")

   .get(routinescontroller.getAllposts);




// Matches with "api/routines/:id"
router.route("/:id")

   .post(postscontroller.addPost)

   .put(postscontroller.editPost)

   .get(postscontroller.getUserPost)

   .delete(postscontroller.deletePost);



module.exports = router;

