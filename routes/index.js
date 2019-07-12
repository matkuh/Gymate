const router = require("express").Router();
const apiRoutes = require("./api");

// router.route('/')
// .get((req, res){
//     res.send


// })




router.use("/api", apiRoutes)

module.exports = router;