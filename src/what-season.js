const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const season = {
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    fall: [8, 9, 10],
    winter: [0, 1, 11],
  };

  if (!date) return "Unable to determine the time of year!";
  if (!(date instanceof Date)) throw new Error("Invalid date!");

  try {
        date.toLocaleDateString();
    } catch (error) {
        throw new Error('Invalid date!');
    }

  const monthNum = date.getMonth();

  for (let month in season) {
    if (season[month].includes(monthNum)) return month;
  }
}

module.exports = {
  getSeason,
};
