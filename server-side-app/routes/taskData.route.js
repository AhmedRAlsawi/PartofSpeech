const router = require("express").Router();
const taskDataController = require("../controller/taskData.controller");

router.get("/wordlist", taskDataController.getWordList);

module.exports = router;
