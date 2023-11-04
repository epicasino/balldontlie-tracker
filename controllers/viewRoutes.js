const router = require("express").Router();
const { User, Player } = require("../models");
const withAuth = require("../utils/auth.js");
const axios = require("axios");
const dayjs = require("dayjs");

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/players/:player", async (req, res) => {
  const bdlRes = await axios.get(
    `https://www.balldontlie.io/api/v1/players?search=${req.params.player}`
  );

  if (bdlRes.data.data) {
    const playerResults = bdlRes.data.data;
    // console.log(playerResults)
    res.render("results", { playerResults, layout: "info" });
  }
});

router.get("/teams/:team", async (req, res) => {
  const teamData = await axios
    .get(`https://www.balldontlie.io/api/v1/teams/${req.params.team}`)
    .then((response) => response.data);

  const currentDate = dayjs().format("YYYY-MM-DD");
  const pastDate = dayjs().subtract(3, "month").format("YYYY-MM-DD");

  const teamGames = await axios
    .get(
      `https://www.balldontlie.io/api/v1/games?end_date=${currentDate}&start_date=${pastDate}&team_ids[]=14`
    )
    .then((response) => response.data)
    .then((games) => games.data.reverse());

  const gameData = await teamGames.forEach((game) => {
    game.date = game.date.slice(0, 10);
  });

  // console.log(teamData);
  // console.log(teamGames);

  if (teamData) {
    res.render("results", { teamData, teamGames, layout: "info" });
  }
});

router.get("/player/:player_id", withAuth, async (req, res) => {
  const bdlPlayer = await axios.get(
    `https://www.balldontlie.io/api/v1/players/${req.params.player_id}`
  );
  const bdlPlayerStat = await axios.get(
    `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.player_id}`
  );
  const player = bdlPlayer.data;
  const stats = bdlPlayerStat.data.data[0];
  if (player) {
    const playerData = { player, stats };
    console.log(playerData);
    res.render("player", { playerData, layout: "info" });
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userPlayerData = await User.findByPk(req.session.userId, {
      include: [Player],
    });
    if (userPlayerData) {
      const userPlayers = userPlayerData.get({ plain: true });
      console.log(userPlayers);
      res.status(200).render("dashboard", { userPlayers });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

// https://www.balldontlie.io/api/v1/players?search=james%20harden
