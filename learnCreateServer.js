// ? Learn Basic HTTP / HTTPS Node functions To Create Server and get and send ==> Request and Responce

// * FileName           -   learnCreateServer

// * Contain Functions -        [Buffer, fs.writeFileSync, const server = http.createServer(), server.Listen ];
// * Contain Functions - RES. : [setHeader, write, end];
// * Contain Functions - REQ. : [on];

// INDEX
// 1) Creating Server
// 2)
// 3)
// 4)

//* Libraries
const http = require("http");

//* Components
const routes = require("./routes");

//1 Creating Server //* It will Create Server and wait for upcomming request so to responce the value
const server = http.createServer(routes);

//1 Creating Server //* This will create a loop of listen command keep running so when we visit page we can get the request from the web and get it to server

server.listen(3000, "localhost");
