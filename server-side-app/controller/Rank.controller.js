const actualRank = require("../service/Rank.service");
class Rank {
  /**
   * To show the user rank after sending post request
   * @param {Object} req The user score that sent in request body
   * @param {Object} res The user rank regarding the given scoreslist to be shown
   */
  static getRank = async (req, res) => {
    try {
      res.set("Access-Control-Allow-Origin", "http://localhost:3000");
      const score = req.body.score;
      const rank = actualRank(score);
      res.status(200).send({ rank });
    } catch (e) {
      res.status(500).send({ message: e.message });
    }
  };
}

module.exports = Rank;
