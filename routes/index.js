var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    message: "You are on the index route",
  });
});

module.exports = router;
