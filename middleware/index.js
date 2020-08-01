const middlewareObject = {};

middlewareObject.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  }
  console.log("No hay usuario.");
}

middlewareObject.isNotLoggedIn = (req, res, next) => {
  if(!req.isAuthenticated()) {
    return next(); 
  }
  console.log("Ya hay un usuario logueado.")
  console.log(req.user)
}

module.exports = middlewareObject;