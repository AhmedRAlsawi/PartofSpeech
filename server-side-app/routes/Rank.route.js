const router = require("express").Router();
const rankController = require("../controller/Rank.controller");

router.post("/rank", rankController.getRank);

module.exports = router;
