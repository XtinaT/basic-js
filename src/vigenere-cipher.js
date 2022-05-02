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
  constructor(direction) {
    //this.alphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
    this.array = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    this.type = direction === false ? "reverse" : "direct";
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    key = key.toLowerCase();
    while (key.length < message.length) {
      key = [...key, ...key];
    }
    let arrayForString = [];
    let C; //индекс буквы шифра в алфавите
    let letter; //буква шифра
    let M; //индекс буквы сообщения в алфавите
    let K; //индекс буквы ключа в алфавите
    let j = 0; //индекс буквы ключа в самом ключе
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
      if (this.array.includes(message[i])) {
        M = this.array.indexOf(message[i]);
        K = this.array.indexOf(key[j]);
        if (M + K > 25) {
          C = K - (26 - M);
        } else C = M + K;
        letter = this.array[C];
        j++;
      } else letter = message[i];
      arrayForString.push(letter);
    }
    if (this.type == "reverse") {
      arrayForString = arrayForString.reverse();
    }
    let string = arrayForString.join("");
    console.log(string.toUpperCase());
    return string.toUpperCase();
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    key = key.toLowerCase();
    while (key.length < encryptedMessage.length) {
      key = [...key, ...key];
    }
    let arrayForString = [];
    let C; //индекс буквы шифра в алфавите
    let letter; //буква шифра
    let M; //индекс буквы сообщения в алфавите
    let K; //индекс буквы ключа в алфавите
    let j = 0; //индекс буквы ключа в самом ключе
    encryptedMessage = encryptedMessage.toLowerCase();
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.array.includes(encryptedMessage[i])) {
        C = this.array.indexOf(encryptedMessage[i]);
        K = this.array.indexOf(key[j]);
        if (C - K < 0) {
          M = C - K + 26;
        } else M = C - K;
        letter = this.array[M];
        j++;
      } else letter = encryptedMessage[i];
      arrayForString.push(letter);
    }
    if (this.type == "reverse") {
      arrayForString = arrayForString.reverse();
    }
    let string = arrayForString.join("");
    return string.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
