const express    = require("express"),
      router     = express.Router(),
      passport   = require("passport"),
      bcrypt     = require("bcrypt"),
      User       = require("../models/User");

router.get("/user", (req, res) => {
  let user = req.user;
  res.send({ user });
})

// ingreso
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

// registro
router.post("/signup", async (req, res) => {
  // Hashea contraseña
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  
  const newUser = new User({
    username: req.body.username,
    password: hashedPass,
    favorites: [],
    history: []
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
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  console.log("Logout");
  res.send({response: "Logout successfull."});
})

module.exports = router;