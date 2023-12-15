const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const obj = new Object();

  domains.forEach((el) => {
    const arrDNS = el.split(".").reverse();
    for (let i = 0; i < arrDNS.length; i += 1) {
      const prop = `.${arrDNS.slice(0, i + 1).join(".")}`;
      if (!obj.hasOwnProperty(prop)) obj[prop] = 0;
      obj[prop] += 1;
    }
  });

  return obj;
}

module.exports = {
  getDNSStats,
};
