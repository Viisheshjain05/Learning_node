const fs = require("fs");

const consoleData = require("../../utils/consoleRequest");

const UserRoutes = (req, res) => {
  const url = req.url;
  const method = req.method;

  //* Console Important Info from request
  // consoleData(req);

  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body><h2> HII NUTS READY TO GIVE YOUR DETAILS</h1></body>");
    res.write(
      `<form action="/create-user" method="POST"> <p><input type="text" name="username" placeholder="Type Your Name"> </p>`
    );
    res.write(
      ` <p><input type="text" name="email" placeholder="Type Your Email"> </p> <button type="submit"><h3> Submit </h3></button>  </form>`
    );

    res.write("</html>");
    return res.end();
  }

  if (url === "/user") {
    res.write("<html>");
    res.write("<head><title>User Page </title></head>");

    res.write("<body><h2>USER DETAILS</h1>");
    res.write("<li>user 1</li>");
    res.write("<li>user 2</li>");
    res.write("<li>user 3</li>");

    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    res.statusCode = 302;
    res.setHeader("Location", "/user");
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const inputDataArray = Buffer.concat(body).toString().split("&");
      const data = inputDataArray.map((e) => e.split("=")[1]);
      fs.writeFile(`${__dirname}/UserDataName.txt`, data[0], (err) => {
        console.log(err);
      });
      fs.writeFile(`${__dirname}/UserDataMail.txt`, data[1], (err) => {
        console.log(err);
      });

      // console.log(inputData);
    });
  }

  res.write(`<body><h1> THIS ROUTE IS NOT SET GO TO HOME </h1></body>`);
  res.end();
};

module.exports = UserRoutes;
