const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;

  let result = "";
  let substr = "";

  if ('addition' in options) {
    if (additionRepeatTimes) {
      for (let i = 1; i <= additionRepeatTimes; i += 1) {
        if (i < additionRepeatTimes) {
          substr += `${addition}${additionSeparator}`;
        } else {
          substr += `${addition}`;
        }
      }
    } else {
      substr = addition;
    }
  }

  if (repeatTimes) {
    for (let i = 1; i <= repeatTimes; i += 1) {
      if (i < repeatTimes) {
        result += `${str}${substr}${separator}`;
      } else {
        result += `${str}${substr}`;
      }
    }
  } else {
    result = `${str}${substr}`;
  }

  return result;
}

module.exports = {
  repeater,
};
