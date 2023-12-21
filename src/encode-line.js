const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  let cnt = 1;
  const resArr = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      cnt += 1;
      continue;
    } else {
      cnt > 1 ? resArr.push(`${cnt}${str[i]}`) : resArr.push(str[i]);
      cnt = 1;
    }
  }

  return resArr.join('');
}

module.exports = {
  encodeLine,
};
