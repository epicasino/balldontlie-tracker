const router = require("express").Router();
const { Player } = require("../../models");
// const axios = require("axios");

// save player data on balldontlie
router.post("/save", async (req, res) => {
  if (req.session.loggedIn) {
    try {
      const newPlayer = await Player.create({
        player_id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        team_name: req.body.team_name,
        user_id: req.session.userId,
      });

      res.status(200).json({ message: "Player successfully saved!" });
    } catch (error) {
      res.status(500).json(error);
    }
  } else res.status(400).json({ message: "Not logged in" });
});

module.exports = router;
