module.exports.postAddProduct = (req, res, next) => {
  res.status(300).render("index");
};

module.exports.getAddProduct = (req, res, next) => {
  res.render("addProduct");
};
