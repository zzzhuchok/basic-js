const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const regexp = /@[a-zA-Z0-9.-]+/g;
  const res = email.match(regexp);
  return res[res.length - 1].slice(1);
}

module.exports = {
  getEmailDomain,
};
