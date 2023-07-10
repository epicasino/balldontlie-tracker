const router = require("express").Router();
const axios = require('axios');

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get('/:player', async (req, res) => {
  const bdlRes = await axios.get(
    `https://www.balldontlie.io/api/v1/players?search=${req.params.player}`
  );

  if (bdlRes.data.data) {
    const playerResults = bdlRes.data.data
    // console.log(playerResults)
    res.render("results", {playerResults});
  }
})

module.exports = router;

// https://www.balldontlie.io/api/v1/players?search=james%20harden