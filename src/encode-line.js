const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let cnt = 1;
  for (let i=0; i<str.length; i++) {
    if (str[i]!=str[i+1]&&cnt==1) result += str[i];
    else if (str[i]!=str[i+1]&&cnt!=1) {
      result += cnt;
      result += str[i];
      cnt = 1;
    } else cnt++;
  };
  
  return result;
}

module.exports = {
  encodeLine
};
