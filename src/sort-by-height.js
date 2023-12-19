const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const sortedArrPos = arr.filter((el) => el > -1).sort((a, b) => b - a);
  const indexArr = arr.map((el) => {
    return el > -1 ? sortedArrPos.pop() : el;
  });

  return indexArr;
}

module.exports = {
  sortByHeight,
};
