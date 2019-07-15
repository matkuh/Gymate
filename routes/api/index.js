const router = require("express").Router();
const usersRoutes = require("./users");
const routinesRoutes = require("./routines");
const postsRoutes = require("./posts");


router.use("/users", usersRoutes);
router.use("/routines", routinesRoutes);
router.use("/posts", postsRoutes);



module.exports = router;