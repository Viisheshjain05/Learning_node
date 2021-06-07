// ? Learn Basic HTTP / HTTPS Node functions To Create Server and get and send ==> Request and Responce

// * FileName           -   learnCreateServer

// * Contain Functions -        [Buffer, fs.writeFileSync, const server = http.createServer(), server.Listen ];
// * Contain Functions - RES. : [setHeader, write, end];
// * Contain Functions - REQ. : [on];

// INDEX
// 2) Form
// 3) Sending and Reciving Form Data into files
// 4) Redirect 302 Status Code
// 5)
// 6)
// 7)

//* Libraries
const fs = require("fs");

const requestHandler = (req, res) => {
  res.setHeader("content-type", "text/html");

  //2 Form //* FORM SETUP AND ROUTES
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title> Node Form</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"> sent data </button> </form> <h1>`
    );
    res.write(`  Beginning of new ERA </h1> </body>`);
    res.write(`</html>`);

    //2.1 Form End// * return the responce end so to stop sending data right now as we do not want to share other write responces
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];

    //3 Form Data //* get data passed from form by on mtd
    req.on("data", (chunk) => {
      //3 Form Data //* data is goted in array of chunks which needed to be stored and concatinated before use
      body.push(chunk);
    });

    //3 Form Data //* Works like promise then as it run after completing before on mtd
    req.on("end", (chunk) => {
      let inputData = Buffer.concat(body)
        .toString()
        .split("=")[1]
        //3 Form Data //? We cannot use replaceAll because it is not supported by node yet we need to check if function or prototype is supported by node or not before running
        .replace(/\+/g, " ");
      fs.writeFileSync("InputData.txt", inputData);
    });

    //4 Redirect // * Status Code 302 Is use to redirect the Url Without this you cannot redirect page t0 other location
    res.statusCode = 302;
    //4 Redirect // * Location is the url which is set to home so to redirect it to home
    res.setHeader("Location", "/");
    return res.end();
  }

  //1 Creating Server //* write use to add body content in chunks
  res.write("<html>");
  res.write("<head><title> Node Server</title></head>");
  res.write("<body> My First Responce sent from node server  <h1>");
  res.write("  Beginning of new ERA </h1> </body>");
  res.write("</html>");

  //1 Creating Server //* Always end res after setting everything else it will keep on sending data and never stop , you cannot edit res after it cause error
  res.end();
};

module.exports = requestHandler;
