// Todo Use this Project in future for big project

//* Libraries
const express = require("express");
// const express = require("../../../../local_dependencies/vender/express");
const { urlencoded } = require("body-parser");

//* Node Libs
const path = require("path");
const fs = require("fs");

//* Components | Routes
const adminRoutes = require("./route/admin");
const userRoutes = require("./route/user");

const TemplateEnginEJS = (props) => {
  const app = express();

  // Get data nicely formated from user
  app.use(urlencoded({ extended: true }));

  // host Static Files
  app.use(express.static(path.join(__dirname, "public")));

  // Set Template Engine EJS
  app.set("view engine", "ejs");

  /**@description  It will look into Global folder view in Root directory */
  app.set("views", path.join(__dirname, "views"));

  app.use(adminRoutes);
  app.use(userRoutes);

  app.get("/", (req, res, next) => {
    res.render("index");
  });

  app.listen("3000", "localhost");
};

module.exports = TemplateEnginEJS;