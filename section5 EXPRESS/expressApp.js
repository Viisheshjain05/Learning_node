// ? Learn To Use express and its basic functions

// * FileName            -   expressApp

// * Contain consepts                   - [middleware, ];
// * Contain Function - app[express]    - [use(), ];

// INDEX
// 1) middleware
// 2)
// 3)
// 4)
// 5)

//* Node Functions
const http = require("http");

// Libraries
const express = require("express");

const ExpressApp = (props) => {
  // 1) middleware EXPRESS INTI //* Init and Create an Express application
  const app = express();

  // 1) middleware //* Use allow to create a middleware where "next" Allows to get to another middleware only when it is passed.
  app.use((req, res, next) => {
    console.log("Inside Middleware");
    next();
  });

  app.use((req, res, next) => {
    console.log("Inside Another Middleware");
  });

  const server = http.createServer(app);

  server.listen("3000", "localhost");
};

//? MIDDLEWARE - it allows to hook new function inside the bigger function to bind and send responce together

module.exports = ExpressApp;
