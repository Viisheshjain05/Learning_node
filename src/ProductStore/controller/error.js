module.exports.error = (req, res, next) => {
  res.render("404", { title: "Error" });
};
