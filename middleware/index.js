const middlewareObject = {};

middlewareObject.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  } else {
    console.log("No hay usuario.");
    return next();
	}
}

middlewareObject.isNotLoggedIn = (req, res, next) => {
  if(!req.isAuthenticated()) {
    return next(); 
  } else {
    console.log("Ya hay un usuario logueado.");
    return next();
	}
}

module.exports = middlewareObject;