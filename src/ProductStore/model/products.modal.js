// Todo Create A Database connection for controllers - Creating Modal With file system

//* Node Libraries
const fs = require("fs");

module.exports = class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayName = () => {
    return " This Is From Producct Class";
    // console.log(this.name, this.price);
  };
};
