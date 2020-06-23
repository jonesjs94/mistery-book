const middlewareObject = {};

middlewareObject.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  }
  console.log("error isloggedin");
}

middlewareObject.isNotLoggedIn = (req, res, next) => {
  if(!req.isAuthenticated()) {
    return next(); 
  }
  console.log("error isnotloggedin")
}

module.exports = middlewareObject;