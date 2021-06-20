const consoleReq = require("../../../../utils/consoleRequest");
const path = require("path");

const route = require("express").Router();

route.get("/", (req, res, next) => {
//   consoleReq(req);
  res.sendFile(path.join(__dirname, "..", "view", "index.html"));
});

module.exports = route;
