const express    = require("express"),
      router     = express.Router(),
      passport   = require("passport"),
      bcrypt     = require("bcrypt"),
      middleware = require("../middleware/index"),
      User       = require("../models/User");

router.post("/history", (req, res) => {
  User.findByIdAndUpdate(req.user._id, req.body);
});

module.exports = router;