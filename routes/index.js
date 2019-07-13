const router = require("express").Router();
const apiRoutes = require("./api");

// router.route('/')
// .get((req, res){
//     res.send


// })



//API Routes
router.use("/api", apiRoutes)



// // Authentication Routes
// router.use("/auth", authRoutes);


module.exports = router;