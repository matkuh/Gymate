const express = require('express')
const router = express.Router()

const apiRoutes = require("./api")

router.use("/api", apiRoutes);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Gymate',
    user: req.user,
  })
})

module.exports = router
