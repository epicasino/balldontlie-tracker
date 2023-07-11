const router = require("express").Router();
const { Player, User } = require("../../models");
const axios = require("axios");

// save player data on balldontlie
router.post("/save", async (req, res) => {
  if (req.session.loggedIn) {
    try {
      const newPlayer = await Player.create({
        player_id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_id: req.session.userId,
      });

      res.status(200).json({ message: "Player successfully saved!" });
    } catch (error) {
      res.status(500).json(error);
    }
  } else res.status(400).json({ message: "Not logged in" });
});

// gets all saved player names and player_id from user_id
router.get("/:user_id", async (req, res) => {
  const userData = await User.findByPk(req.params.user_id, {
    include: [Player],
  });
  const userPlayers = await userData.get({ plain: true });
  res.status(200).json(userPlayers);
});

router.delete("/player/:player_id", async (req, res) => {
  try {
    const deletedPlayer = await Player.destroy({
      where: {
        player_id: req.params.player_id,
        user_id: req.session.userId,
      },
    });
    if (deletedPlayer) {
      res.status(200).json({ message: "Player Deleted!" });
    } else res.status(404).json({ message: "404 Not Found" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/stats/:player_id", async (req, res) => {
  const apiRes =
    await axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.player_id}
`);
  res.json(apiRes.data);
});

module.exports = router;
