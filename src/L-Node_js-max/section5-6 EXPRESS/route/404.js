const routes = require("express").Router();

/** @description GET POST DEL PUT are responsibel for exact matching but use do losse matching*/
// As Use is not EXACT matching  It will work for all missed routes`
routes.use("/", (req, res, next) => {
  res.status(404).send("Welcome to 404 home page");
});

module.exports = routes;
