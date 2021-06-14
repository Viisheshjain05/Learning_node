//* Libraries
const express = require("express");
// const urlencoded = require("body-parser/lib/types/urlencoded");
const { urlencoded } = require("body-parser");

//* Node Libraries
const fs = require("fs");
const path = require("path");

//* utils
const consoleOutput = require("../utils/consoleRequest");

/**
 * @description Shows how to handle POST, PUT, GET Request in express by sending reply from form
 * @param {formOutput} Message We will use app.post for Reciveing POST Method
 * @param {message} POST We will use app.get() for recieving GET method
 *
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

  app.use("/", (req, res, next) => {
    // consoleOutput(req);

    res.send(
      '<form action="message" method="POST"> <input type="text" placeholder="Your Name" name="input" >  <button type="submit"> Submit </button></form>'
    );
    next();
  });

  /**
   * @example We will use Post like this to get data into this url
   * @description app.POST is used to filter through POST METHODS in specific url only
   */

  app.post("/message", (req, res, next) => {
    console.log(req.body);
    // const body = [];

    /**
     * @example console.log("------body-------", body);
     * @description Request.on data will be passed only on to on you cannot accsess it outside it
     */
    // req.on("data", (chunk) => {
    //   body.push(chunk);
    // });

    // req.on("end", () => {
    //   const inputData = Buffer.concat(body).toString().split("=")[1];
    /**
     * @type {string}
     * @param {path} required add path where you want to store file
     * @example `${__dirname}/inputFile.txt`
     * @example path.join(__dirname, "../", "inputFile.txt"),
     *
     * @param {Data} required pass the string you need to output
     * @example Buffer.concat(body).toString().split("=")[1];
     *
     * @param {Callback} required for case of error you have to add callback
     */

    //  fs.writeFile(path.join(__dirname, "inputFile.txt"), inputData, (err) => {
    //     err && console.log("fs error", err);
    //   });
    // });

    consoleOutput(req);
  });

  /**
   * @description it is same as server.listen where we define port and host
   */

  app.listen("3000", "localhost");
};

module.exports = HandleRequest;
