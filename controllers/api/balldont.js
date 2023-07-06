const router = require("express").Router();
const axios = require("axios");

// Gets all player data on balldontlie
router.get("/", async (req, res) => {
  const userInput = 'lebron';
  const user = req.user;
  let page = 1;

  try {
    // fetch from api
    const playerData = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${userInput}&page=${page}`
    ).then((data) => data.json());
    res.json(playerData)
    // save data from api
    // if ()
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
