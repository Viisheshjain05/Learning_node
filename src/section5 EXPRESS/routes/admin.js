const routes = require("express").Router();
const path = require("path");

/** @description GET POST DEL PUT are responsibel for exact matching but use do losse matching*/
routes.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});



module.exports = routes;
