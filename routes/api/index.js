const router = require("express").Router();
const userRoutes = require("./users");
const routinesRoutes = require("./routines");


router.use("/users", userRoutes);
router.use("/routines", routinesRoutes);
router.use("/posts", postsRoutes);



module.exports = router;