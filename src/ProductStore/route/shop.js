const route = require("express").Router();
const shopRoutes = require("../controller/shop");

route.get("/view-product", shopRoutes.getViewProduct);

route.get("/", shopRoutes.getHomePage);

module.exports = route;
