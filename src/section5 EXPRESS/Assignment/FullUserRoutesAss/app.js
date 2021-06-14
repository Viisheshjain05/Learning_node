  //* Libraries
  const express = require("express");
  const { urlencoded } = require("body-parser");

  //* Node Libraries
  const path = require("path");

  //* Components
  const adminRoutes = require("./routes/admin");
  const userRoutes = require("./routes/userData");

  //* Utils
  const consoleReq = require("../../../utils/consoleRequest");

  const FullUserRoutes = () => {
    const app = express();

    app.use(urlencoded({ extended: false }));

    app.use(express.static(path.join(__dirname, "public")));

    app.use(adminRoutes);

    app.use(userRoutes);

    app.listen("3000", "localhost");
  };

  module.exports = FullUserRoutes;
