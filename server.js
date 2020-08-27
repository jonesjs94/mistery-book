const express            = require("express"),
      path               = require("path"),
      app                = express(),
      mongoose           = require("mongoose"),
      cors               = require("cors"),
      passport           = require("passport"),
      session            = require("express-session"),
      initializePassport = require("./passport-config");

// ROUTES
const indexRoute = require("./routes/index");
const historyRoute = require("./routes/history");
const favoritesRoute = require("./routes/favorites");
   
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

// ROUTES
app.use(indexRoute);
app.use(historyRoute);
app.use(favoritesRoute);


// GLOBAL VARIABLES
app.use((req, res, next) => {
  res.locals.activeUser = req.user;
  next();
});

// REACT
app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Server up!"))