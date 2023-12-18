const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  matrix.forEach((row, rowIndex, rowwArr) => {
    row.forEach((cell, cellIndex, cellArr) => {
      if (rowIndex === 0) {
        if (cell) {
          sum += cell;
        }
      } else {
        if (rowwArr[rowIndex - 1][cellIndex]) {
          sum += cell;
        }
      }
    });
  });

  return sum;
}

matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

module.exports = {
  getMatrixElementsSum,
};
