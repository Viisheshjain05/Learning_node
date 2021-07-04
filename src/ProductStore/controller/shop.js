module.exports.getViewProduct = (req, res, next) => {
  res.render("viewProduct", { title: "New Books", price: "", image_url: "" });
};

module.exports.getHomePage = (req, res, next) => {
  res.render("index");
};
