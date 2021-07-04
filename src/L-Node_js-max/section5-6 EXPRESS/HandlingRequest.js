//* Libraries
const express = require("express");
// const urlencoded = require("body-parser/lib/types/urlencoded");
const { urlencoded } = require("body-parser");
const adminRoutes = require("./route/admin");
const shopRoutes = require("./route/shop");
const ErrorPage = require("./route/404");
//* Node Libraries
const path = require("path");

/**
 * @description Shows how to handle POST, PUT, GET Request in express by sending reply from form
 * @param {formOutput} Message We will use app.post for Reciveing POST Method
 * @param {message} POST We will use app.get() for recieving GET method
 */

const HandleRequest = (props) => {
  const app = express();
  /**
   * @constant urlencoded using it as a body-parser for all the METHOD as POST, GET, PUT etc so to get data in the better format then app.on("data", chunks)
   * @description we need to use it in every request so we are adding it at top with next() so it want block are routes and get used in all the routes
   * @returns {urlencoded} After using in app.use(urlencoded()) you can access data into req.body() as it will pass data into req object into body object as an object format
   */

  /**
   * @description as this mtd has no url and it is at the top it will be parsed by all the routes after using bodyparse.urlencoded you cannot get data from app.on("data", chunks), it must to be pass in app.use not in post mtd as it wont work
   * @example app.use(urlencoded({ extended: true }));
   * @description now when we check app.on we get {name: inputdata}
   */
  app.use(urlencoded({ extended: true }));

  /** @description Just Add Route Link it will be trigered when req will be passed in it */
  app.use("/shop", shopRoutes);

  app.use(adminRoutes);

  app.use(ErrorPage);

  /**
   * @example We will use Post like this to get data into this url
   * @description app.POST is used to filter through POST METHODS in specific url only
   */

  /**
   * @description it is same as server.listen where we define port and host
   */

  app.listen("3000", "localhost");
};

module.exports = HandleRequest;
