/**
 * @param {string} req personal detail
 * @returns {console} whateveer is added
 */

const consoleReq = (req) => {
  const { method, url, headers } = req;

  console.log("--------------------------------------------------");
  console.log(
    `REQ DATA - \n MTD : ${method}, \n URL : ${url}, \n HEADERS :`,
    headers
  );
  console.log("--------------------------------------------------");
};

module.exports = consoleReq;
