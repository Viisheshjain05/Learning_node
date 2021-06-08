//!) This will create Text file and crash after this
const fs = require("fs");

module.exports.log = fs.writeFileSync(
  `${__dirname}/hello.txt`,
  "Hello From first node app"
);
