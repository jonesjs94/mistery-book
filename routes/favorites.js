const express    = require("express"),
      router     = express.Router(),
      middleware = require("../middleware/index"),
      User       = require("../models/User");

// ADD
router.post("/favorites", middleware.isLoggedIn, (req, res) => {
  
  User.findByIdAndUpdate(
    req.user._id, 
    {$push: {favorites: req.body}},
    (err, favorite) => {
      if (err) {
        console.log(err);
      } else   { 
        res.sendStatus(200);
        console.log("Favorite saved.");
      }
    }
  );

});

// DELETE
router.get("/favorites/delete/:id", middleware.isLoggedIn, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id, 
    {$pull: {favorites: {id: Number(req.params.id)} }},
    (err, favorite) => {
      if (err) {
        console.log(err);
      } else   { 
        res.sendStatus(200);
        console.log("Favorite removed.");
      }
    }
  );

});


module.exports = router;