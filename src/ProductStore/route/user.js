const route = require("express").Router();

route.get("/view-product", (req, res, next) => {
  res.send("This Is Product for user");
});

module.exports = route;
