const route = require("express").Router();
const adminRoutes = require("../controller/admin");

route.get("/add-product", adminRoutes.getAddProduct);

route.post("/add-product", adminRoutes.postAddProduct);

route.post("/edit-product", adminRoutes.postAddProduct);

module.exports = route;
