const router = require("express").Router();
const usersRoutes = require("./users");
const routinesRoutes = require("./routines");
const postsRoutes = require("./posts");
const statsRoutes = require("./stats");


router.use("/users", usersRoutes);
router.use("/routines", routinesRoutes);
router.use("/posts", postsRoutes);
router.use("/stats", statsRoutes);



module.exports = router;