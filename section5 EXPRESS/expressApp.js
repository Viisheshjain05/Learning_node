// ? Learn To Use express and its basic functions

// * FileName            -   expressApp

// * Contain consepts                   - [middleware, ];
// * Contain Function - app[express]    - [use(), res.send() ];

// INDEX
// 1) middleware
// 2) Sending Data
// 3)
// 4)
// 5)

//* Node Functions
// const http = require("http");

// Libraries
const express = require("express");
// const classnames = require("classname");
const { classnames } = require("../utils/venderExport");

const ExpressApp = (props) => {
  // 1) middleware EXPRESS INTI //* Init and Create an Express application
  const app = express();
  console.log(classnames("this is from Classname"));

  // 1) middleware //* Use allow to create a middleware where "next" Allows to get to another middleware only when it is passed.

  // 1) middleware //* We always travel top to bottom by calling next() in middleware to middleware
  app.use((req, res, next) => {
    console.log("Inside Middleware");

    // 1) middleware //* allow the request to continue to next middleware inline as exit from this.
    next();
  });

  app.use((req, res, next) => {
    console.log("Inside Another Middleware");
    // 2) Sending Data //* Send is express function allow to send data without any tention to setHeader() || end() || write() the res function we can send files chunks any type of data

    res.send("<h1>Hii from EXPRESS JS </h1>");
  });

  // 1) middleware //* We can also use listen on app or express as behind the sceen express will use createServer and pass the data and listen function to it so it will work fine
  app.listen("3000", "localhost");
};

//? MIDDLEWARE - it allows to hook new function inside the bigger function to bind and send responce together

module.exports = ExpressApp;
