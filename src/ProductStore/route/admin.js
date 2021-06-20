const route = require("express").Router();

route.get("/add-product", (req, res, next) => {
  res.render("addProduct");
});

route.post("/add-product", (req, res, next) => {
  res.status(300).render("index");
});

route.get("/view-product", (req, res, next) => {
  res.render("viewProduct", { title: "New Books" });
});

module.exports = route;
