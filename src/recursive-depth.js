const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    // this.depthCnt = 1;
    // this.result = 0;
  }
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let cntDepth = 0;
    let result = 0;

    if (Array.isArray(arr)) {
      result += 1;

      for (let i = 0; i < arr.length; i += 1) {
        if (Array.isArray(arr[i])) {
          cntDepth += 1;
          cntDepth += this.calculateDepth(arr[i]);
          if (cntDepth > result) result = cntDepth;
          cntDepth = 0;
        }
      }
    }

    return result;
  }
}

module.exports = {
  DepthCalculator,
};
