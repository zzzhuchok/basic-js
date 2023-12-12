const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let name = "";

  if (!Array.isArray(members)) return false;

  name = members
    .map((name) => {
      if (typeof name === "string") {
        return name.trim().toUpperCase().at(0);
      }
    })
    .sort()
    .join("");

  return name.length ? name : false;
}

console.log("--- : ADMM", createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]));

module.exports = {
  createDreamTeam,
};
