// Router Will act as a mini express app just a seprate function to get it use with the express overall calls
const router = require("express").Router();

// const fs = require("fs");

//* utils
const consoleOutput = require("../../utils/consoleRequest");

/** @description Get to triger on get request */
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="add-product" method="POST"> <input type="text" placeholder="Your Name" name="input" >  <button type="submit"> Submit </button></form>'
  );
  next();
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  next();
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

module.exports = router;
