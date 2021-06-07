const fs = require("fs");

module.exports = fs.writeFileSync(
  `${__dirname}/hello.txt`,
  "first Hello From first node app"
);
