const fs = require("fs");

/**
 * To read the data from JSON file
 * @returns {Array} An array of words and scoreslist
 */

const readData = () => {
  const taskData = fs.readFileSync("./DB/TestData.json");
  const taskDataJson = JSON.parse(taskData);
  return taskDataJson;
};

module.exports = readData;
