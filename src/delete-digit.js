const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numberS = n.toString();
  let array = [];

  for (let i=0;i<numberS.length;i++) {
    let newString = '';
    for (let j=0;j<numberS.length;j++) {
      if (i == j) continue;
      newString += numberS[j];
    }
    array.push(+newString);
  }
  let max = array[0];
  for (let i=1;i<array.length;i++) {
    if (max<array[i]) max = array[i];
  }
  return max;
}

module.exports = {
  deleteDigit
};
