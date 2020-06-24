const express            = require("express"),
      app                = express(),
      mongoose           = require("mongoose"),
      cors               = require("cors"),
      middleware         = require("./middleware/index"),
      bcrypt             = require("bcrypt"),
      passport           = require("passport"),
      session            = require("express-session"),
      initializePassport = require("./passport-config");

const port = process.env.PORT || 3001;

// MODELS
const User = require("./models/User");
   

// DB CONNECTION
mongoose.connect(
  "mongodb+srv://jonathan:jonathan@cluster0-yhqbu.gcp.mongodb.net/test?retryWrites=true&w=majority",
  { 
    useCreateIndex: true, 
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err) => {
		if (err) throw err;
		console.log("Base de datos online")
  }
);


// CONFIG
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "jonathan",
  resave: false, 
  saveUninitialized: false
}));

// PASSPORT CONFIG
app.use(passport.initialize());
app.use(passport.session());
initializePassport();


// ====================        ====================
// ==================== ROUTES ====================
// ====================        ====================

app.post("/login", middleware.isNotLoggedIn, passport.authenticate("local"), (req, res) => {
  res.send({ user: req.user })
});

app.post("/signup", middleware.isNotLoggedIn, async (req, res) => {
  // Hashea contraseña
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  
  const newUser = new User({
    username: req.body.username,
    password: hashedPass
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
      res.send({user: user});
    });
  })
})


app.listen(port, () => console.log("Server up!"))