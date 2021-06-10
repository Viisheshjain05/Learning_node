// TODO

const http = require("http");
const userRoutes = require("./routes");

const CreateUserAssignment = (props) => {
  const server = http.createServer(userRoutes);
  server.listen(3000, "localhost");
};

module.exports = CreateUserAssignment;
