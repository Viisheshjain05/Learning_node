// Todo Use this Project in future for big project

//* Libraries
const express = require("express");
const errorRoutes = require("./controller/error");
const { urlencoded } = require("body-parser");

/** @description Look into the root of the project for env and connect to this file*/
require("dotenv").config({ path: `./.env` });

//* Node Libs
const path = require("path");
// const fs = require("fs");

//* Components | Routes
const adminRoutes = require("./route/admin");
const userRoutes = require("./route/shop");

const TemplateEnginEJS = (props) => {
  /** @description Always have or part so to have backup in case of disconnection with env*/
  const port = process.env.PORT || 5000;
  const host = process.env.HOST || "localhost";

  /** @description Create Instance in app to create express app*/
  const app = express();

  /** @description Get data nicely formated from user */
  app.use(urlencoded({ extended: true }));

  /** @deprecated host Static Files*/
  app.use(express.static(path.join(__dirname, "public")));

  /** @description Set Template Engine EJS */
  app.set("view engine", "ejs");

  /**@description  It will look into Global folder view in Root directory */
  app.set("views", path.join(__dirname, "views"));

  /** @description Routes Pages Controled Inside routes Folder */
  app.use(adminRoutes);
  app.use(userRoutes);

  /** @description Error Page When No Routes Found */
  app.use("/", errorRoutes.error);

  /** @description start Listing project in localhost 3000*/
  app.listen(port, host);
};

module.exports = TemplateEnginEJS;
