const route = require("express").Router();
const path = require("path");
const fs = require("fs");

route.get("/add-user", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "view", "addUser.html"));
});

route.post("/add-user", (req, res, next) => {
  console.log(req.body);
  fs.writeFile(path.join(__dirname, "data.txt"), req.body.username, (err) => {
    console.log("  flie - userData ", err);
  });
  next();
});

route.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "..", "view", "404.html"));
  // .send(`<h1>404 Page As no request is recived for Route : ${req.url}</h1> `);
});

module.exports = route;
