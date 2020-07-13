const express    = require("express"),
      router     = express.Router(),
      passport   = require("passport"),
      bcrypt     = require("bcrypt"),
      middleware = require("../middleware/index"),
      User       = require("../models/User");

router.post("/history", (req, res) => {
  
  User.findByIdAndUpdate(
    req.user._id, 
    {$push: {history: req.body}},
    (err, history) => {
      if (err) {
        console.log(err);
      } else   { 
        res.sendStatus(200);
        console.log("History saved.");
      }
    }
  );

});



module.exports = router;