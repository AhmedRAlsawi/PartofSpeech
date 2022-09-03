const data = require("./ReadData.service");

/**
 * To return validated array that has all types of words after picking them randomly
 * @returns {Array} List of words 
 */
const getWordslist = async () => {
  const readData = data();
  const wordList = readData.wordList;
  const nums = await generateRandomNumber(wordList);
  const myWords = [];
  for (n of nums) {
    myWords.push(wordList[n]);
  }
  const validatedList = await validateTypes(myWords);
  if (!validatedList) {
    return getWordslist();
  } else {
    return myWords;
  }
};

/**
 * To generate random numbers that act as indexes to pick random words
 * @param {Array} list List of objects, to collect 10 words randomly to be shown to the user
 * @returns {Array} List of rendomly picked words 
 */

function generateRandomNumber(list) {
  const nums = new Set();
  while (nums.size != 10) {
    nums.add(Math.floor(Math.random() * list.length));
  }
  return [...nums];
}

/**
 * To validate the list
 * @param {Array} list List of word types PoS to be validated that it contains at least 1 type of each type
 * @returns False if it doesn't contain at least one of the given types, or True it it contains the 4 types  
 */

function validateTypes(list) {
  const typeNoun = list.filter((w) => w.pos == "noun");
  const typeVerb = list.filter((w) => w.pos == "verb");
  const typeAdv = list.filter((w) => w.pos == "adjective");
  const typeAdj = list.filter((w) => w.pos == "adverb");
  if (
    typeNoun.length === 0 ||
    typeAdj.length === 0 ||
    typeAdv.length === 0 ||
    typeVerb.length === 0
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = getWordslist;
