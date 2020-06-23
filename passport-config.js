const localStrategy = require("passport-local").Strategy,
      passport      = require("passport"),
      User          = require("./models/User"),
      bcrypt        = require("bcrypt");

function initialize() {
  passport.use(new localStrategy( 
    async (username, password, done) => {

      // Obtiene usuario de la DB
      const user = await User.findOne({ username: username }, (err, user) => {
        if(err) {
          console.error(err);
        }
        else {
          return user;
        }
      });

      // Confirma si el usuario existe
      if(user === null) {
        return done(null, false, {message: "The username doesn´t exist."})
      }

      // Confirma si la contraseña es correcta
      try {
        const pass = await bcrypt.compare(password, user.password)
        if(pass) {
          return done(null, user);
        } else {
          return done(null, false, {message: "Wrong password."});
        }
      } catch (error) {
        return done(e);
      }
      
    }
  ));

  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      return done(err, user)
    })
  });

}

module.exports = initialize;