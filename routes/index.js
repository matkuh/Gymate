const router = require("express").Router();
const apiRoutes = require("./api");



//API Routes
router.use("/api", apiRoutes)

router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Gymate',
      user: req.user,
    })
  })



// // Authentication Routes
// router.use("/auth", authRoutes);


module.exports = router;