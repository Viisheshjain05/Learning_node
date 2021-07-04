const product = require("../model/products.modal");

module.exports.postAddProduct = (req, res, next) => {
  // console.log(req.body);
  const Pr = new product();
  console.log(Pr.displayName());
  res.status(300).render("index");
};

module.exports.getAddProduct = (req, res, next) => {
  res.render("addProduct");
};
