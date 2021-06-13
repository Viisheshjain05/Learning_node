const express = require("express");

/**
 * Test Middleware Function
 * @description To show how use mtd works And how to use in express routes
 * 
 * @summary get an idea about How to work with diffrent routes
 * @param {use} Manage.Routes - "use" is function which describe when to call the function on routes
 * @return {write}  -send is express Func to send data as responce
 * @return {send}  - write is node function to send data as responce
 */

const MiddlewareFunc = () => {
  const app = express();

  app.use("/user", (req, res, next) => {
    console.log("inside Middleware");
    res.send("This is user page");
    // next();
  });
  app.use("/", (req, res, next) => {
    console.log("inside Another One");
    res.write("This is my html page");
    res.end();
  });

  app.listen("3000", "localhost");
};

module.exports = MiddlewareFunc;
