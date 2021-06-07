const http = require("http");

// Request Listner
function rqListner(req, res) {
  console.log(req);

  //*   It will hard exit our server so we cannot enter into it again we need to restart the server 
  process.exit()
    
}

//* It will Create Server and wait for upcomming request so to responce the value
const server = http.createServer(rqListner);

//* This will create a loop of listen command keep running so when we visit page we can get the request from the web and get it to server
server.listen(3000, "localhost");
