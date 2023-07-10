const router = require("express").Router();

const userRoutes = require("./userRoutes");
const ballDontLie = require("./balldont");

router.use("/user", userRoutes);
router.use("/balldontlie", ballDontLie);

module.exports = router;
