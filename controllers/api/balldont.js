const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) =>{
  const userInput = req.body.userInput;
  const user = req.user;
  
  try {
    // fetch from api
    const ballApi = await axios.get(`https://www.balldontlie.io/api/v1/players`);
    const data = ballApi.data;
    res.json(ballApi);
    // save data from api 
    // if ()
    // res.json({message: "test"});
  
  }
  catch(error) {
    console.log(error)
  }
});
module.exports = router;