module.exports.getViewProduct = (req, res, next) => {
  res.render("viewProduct", { title: "New Books" });
};

module.exports.getHomePage = (req, res, next) => {
  res.render("index");
}