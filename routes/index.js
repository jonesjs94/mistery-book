const express    = require("express"),
      router     = express.Router(),
      passport   = require("passport"),
      bcrypt     = require("bcrypt"),
      middleware = require("../middleware/index"),
      User       = require("../models/User");

// ingreso
router.post("/login", middleware.isNotLoggedIn, passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

// registro
router.post("/signup", middleware.isNotLoggedIn, async (req, res) => {
  // Hashea contraseña
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  
  const newUser = new User({
    username: req.body.username,
    password: hashedPass,
    favorites: {},
    history: {}
  });
  
  // Crea usuario nuevo
  newUser.save((err, user) => {
    if(err) {
      console.error(err);
      return res.send({message: "Hubo un error. Intente nuevamente."});
    }
    console.log(user);

    // Loguea al usuario recién creado
    req.login(user, (err) => {
      if(err) return next(err);
      res.send(user);
    });
  })
})

module.exports = router;