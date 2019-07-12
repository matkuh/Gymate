const router = require("express").Router();
const userRoutes = require("./user");
const routinesRoutes = require("./routines");


router.use("/user", userRoutes);
router.use("/routines", routinesRoutes);



module.exports = router;