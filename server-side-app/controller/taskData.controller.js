const taskDataService = require("../service/taskData.service");
class WordList {
/**
 * To get the words list to be shown 
 * @param {Array} res The wordslist used 
 */

  static getWordList = async (req, res) => {
    try {
      const data = await taskDataService();
      res.set("Access-Control-Allow-Origin", "http://localhost:3000");
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({
        message: e.message,
      });
    }
  };
}

module.exports = WordList;
