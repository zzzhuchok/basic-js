const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const res = matrix.map((row, rowIndex, rowArr) => {
    const newEl = row.map((cell, cellIndex, cellArr) => {
      let cnt = 0;

      /* TOP ROW */
      if (rowIndex === 0) {
        if (cellIndex === 0) {
          // First cell
          if (cellArr[cellIndex + 1]) cnt += 1;
          if (rowArr[rowIndex + 1][cellIndex]) cnt += 1;
          if (rowArr[rowIndex + 1][cellIndex + 1]) cnt += 1;
        } else if (cellIndex === cellArr.length - 1) {
          // Last cell
          if (cellArr[cellIndex - 1]) cnt += 1;
          if (rowArr[rowIndex + 1][cellIndex]) cnt += 1;
          if (rowArr[rowIndex + 1][cellIndex - 1]) cnt += 1;
        } else {
          // Other
          if (cellArr[cellIndex + 1]) cnt += 1;
          if (cellArr[cellIndex - 1]) cnt += 1;
          if (rowArr[rowIndex + 1][cellIndex]) cnt += 1;
          if (rowArr[rowIndex + 1][cellIndex - 1]) cnt += 1;
          if (rowArr[rowIndex + 1][cellIndex + 1]) cnt += 1;
        }
        return cnt;
      }

      /* BOTTOM ROW */
      if (rowIndex === rowArr.length - 1) {
        if (cellIndex === 0) {
          // First cell
          if (cellArr[cellIndex + 1]) cnt += 1;
          if (rowArr[rowIndex - 1][cellIndex]) cnt += 1;
          if (rowArr[rowIndex - 1][cellIndex + 1]) cnt += 1;
        } else if (cellIndex === cellArr.length - 1) {
          // Last cell
          if (cellArr[cellIndex - 1]) cnt += 1;
          if (rowArr[rowIndex - 1][cellIndex]) cnt += 1;
          if (rowArr[rowIndex - 1][cellIndex - 1]) cnt += 1;
        } else {
          // Other
          if (cellArr[cellIndex + 1]) cnt += 1;
          if (cellArr[cellIndex - 1]) cnt += 1;
          if (rowArr[rowIndex - 1][cellIndex]) cnt += 1;
          if (rowArr[rowIndex - 1][cellIndex - 1]) cnt += 1;
          if (rowArr[rowIndex - 1][cellIndex + 1]) cnt += 1;
        }
        return cnt;
      }

      /* OTHER ROW */
      if (cellIndex === 0) {
        // First cell
        if (cellArr[cellIndex + 1]) cnt += 1;
        if (rowArr[rowIndex - 1][cellIndex]) cnt += 1;
        if (rowArr[rowIndex - 1][cellIndex + 1]) cnt += 1;
        if (rowArr[rowIndex + 1][cellIndex]) cnt += 1;
        if (rowArr[rowIndex + 1][cellIndex + 1]) cnt += 1;
      } else if (cellIndex === cellArr.length - 1) {
        // Last cell
        if (cellArr[cellIndex - 1]) cnt += 1;
        if (rowArr[rowIndex - 1][cellIndex]) cnt += 1;
        if (rowArr[rowIndex - 1][cellIndex - 1]) cnt += 1;
        if (rowArr[rowIndex + 1][cellIndex]) cnt += 1;
        if (rowArr[rowIndex + 1][cellIndex - 1]) cnt += 1;
      } else {
        // Other
        if (cellArr[cellIndex + 1]) cnt += 1;
        if (cellArr[cellIndex - 1]) cnt += 1;
        if (rowArr[rowIndex - 1][cellIndex]) cnt += 1;
        if (rowArr[rowIndex - 1][cellIndex + 1]) cnt += 1;
        if (rowArr[rowIndex - 1][cellIndex - 1]) cnt += 1;
        if (rowArr[rowIndex + 1][cellIndex]) cnt += 1;
        if (rowArr[rowIndex + 1][cellIndex - 1]) cnt += 1;
        if (rowArr[rowIndex + 1][cellIndex + 1]) cnt += 1;
      }

      return cnt;
    });
    return newEl;
  });

  return res;
}

module.exports = {
  minesweeper,
};
