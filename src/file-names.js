const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const newNames = [];
  const nameObj = new Object();

  names.forEach((el) => {
    if (newNames.includes(el)) {
      nameObj[el] ? (nameObj[el] += 1) : (nameObj[el] = 1);
      newNames.push(`${el}(${nameObj[el]})`);
    } else {
      newNames.push(el);
    }
  });
  return newNames;
}

console.log(
  "--- rename: ",
  renameFiles(["file", "file", "image", "file(1)", "file"])
);

module.exports = {
  renameFiles,
};
