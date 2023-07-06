const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) =>{
  const userInput = req.body.userInput;
  const user = req.user;
  
  try {
    // fetch from api
    fetch(`https://www.balldontlie.io/api/v1/players`)
      .then(data => data.json())
      .then(results => res.json(results));
    // save data from api 
    // if ()
  
  }
  catch(error) {
    console.log(error)
  }
});
module.exports = router;