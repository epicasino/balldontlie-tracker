const router = require("express").Router();
const { User, Player } = require("../models");
const axios = require("axios");

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/search/:player", async (req, res) => {
  const bdlRes = await axios.get(
    `https://www.balldontlie.io/api/v1/players?search=${req.params.player}`
  );

  if (bdlRes.data.data) {
    const playerResults = bdlRes.data.data;
    // console.log(playerResults)
    res.render("results", { playerResults });
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const userPlayerData = await User.findByPk(req.session.userId, {
      include: [Player],
    });
    if (userPlayerData) {
      const userPlayers = userPlayerData.get({ plain: true });
      console.log(userPlayers);
      res.status(200).render("dashboard", {userPlayers});
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

// https://www.balldontlie.io/api/v1/players?search=james%20harden
