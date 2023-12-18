const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.split("~~").length;
  },
  addLink(value = "") {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.chain.length > 0
      ? (this.chain += `~~( ${value} )`)
      : (this.chain += `( ${value} )`);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let lengthArr = this.chain.split("~~").length;
    if (position > 0 && position < lengthArr && Number.isInteger(position)) {
      let chain = this.chain.split("~~");
      chain.splice(position - 1, 1);
      this.chain = chain.join("~~");
    } else {
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.chain = this.chain.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let result = this.chain;
    this.chain = "";
    return result;
  },
};

module.exports = {
  chainMaker,
};
