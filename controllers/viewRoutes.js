const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/results", async (req, res) => {
  res.render("results");
});

module.exports = router;
