const express = require("express");
const path = require("path");
const fs = require("fs");
const { urlencoded } = require("body-parser");

const LocalDataVar = () => {
  const Products = [];

  const app = express();

  app.use(urlencoded({ extended: true }));

  app.get("/", (req, res, next) => {
    console.log("Products", Products);

    res.sendFile(path.join(__dirname, "view", "index.html"));
    // next();
  });

  app.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname, "view", "addProduct.html"));
  });

  app.post("/add-product", (req, res, next) => {
    Products.push({ item: req.body.item });
    res.status(302).redirect("/");
  });

  app.use("/", (req, res, next) => {
    res.send("<h1>notFound</h1>");
  });

  app.listen("3000", "localhost");
};

module.exports = LocalDataVar;
