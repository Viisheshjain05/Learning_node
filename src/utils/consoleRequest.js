/**
 * @param {string} req Send Request || Responce object to get output of
 * @returns {console} method Url and headers formated
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
