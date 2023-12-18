const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    message = message.toLowerCase();
    key = key.toLowerCase();

    if (key.length < message.length) {
      let index = 0;
      let newKey = "";

      for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
          newKey += message[i];
          continue;
        }

        newKey += key[index];
        index++;

        if (index >= key.length) index = 0;
      }

      key = newKey;
    }

    let newMessage = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) >= 97 && message[i].charCodeAt(0) <= 122) {
        let indexKey = this.alphabet.indexOf(key[i]);
        let alphabet = this.alphabet.slice(indexKey) + this.alphabet;
        let indexMess = this.alphabet.indexOf(message[i]);

        newMessage += alphabet[indexMess];
      } else {
        newMessage += message[i];
      }
    }

    if (this.type === false) {
      newMessage = newMessage.split("").reverse().join("");
    }

    return newMessage.toUpperCase();
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    message = message.toLowerCase();
    key = key.toLowerCase();

    if (key.length < message.length) {
      let index = 0;
      let newKey = "";

      for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
          newKey += message[i];
          continue;
        }

        newKey += key[index];
        index++;

        if (index >= key.length) index = 0;
      }

      key = newKey;
    }

    let newMessage = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) >= 97 && message[i].charCodeAt(0) <= 122) {
        let indexKey = this.alphabet.indexOf(key[i]);
        let alphabet = this.alphabet.slice(indexKey) + this.alphabet;
        let indexMess = alphabet.indexOf(message[i]);

        newMessage += this.alphabet[indexMess];
      } else {
        newMessage += message[i];
      }
    }

    if (this.type === false) {
      newMessage = newMessage.split("").reverse().join("");
    }

    return newMessage.toUpperCase();
  }

}

module.exports = {
  VigenereCipheringMachine,
};
