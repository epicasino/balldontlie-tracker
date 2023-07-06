const router = require("express").Router();
const axios = require("axios");

// Gets all player data on balldontlie
router.get("/", async (req, res) => {
  const userInput = req.body.userInput;
  const user = req.user;

  try {
    // fetch from api
    const playerData = await fetch(
      `https://www.balldontlie.io/api/v1/players`
    ).then((data) => data.json());
    // .then((results) => res.json(results));
    res.json(playerData)
    // save data from api
    // if ()
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
