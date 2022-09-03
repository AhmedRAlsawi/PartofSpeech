const data = require("./ReadData.service");

/**
 * To determine the user rank
 * @param {Number} score The score of user after answering the shown questions, to be used to determine his rank regarding the given scoreslist in the JSON file
 * @returns {Number} The user rank to be shown
 */
const rank = (score) => {
  const readData = data();
  const length = readData.scoresList.length;
  const quantity = readData.scoresList.filter((s) => s < score);
  const rank = parseFloat(((quantity.length / length) * 100).toFixed(2));
  return rank;
};

module.exports = rank;
