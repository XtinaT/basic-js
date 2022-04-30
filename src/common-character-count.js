const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1H = {};
  for (let i=0; i<s1.length; i++) {
    if (!(s1[i] in s1H)) s1H[s1[i]] = 1;
    else s1H[s1[i]]++;
  }
  console.log(s1H);

  let cnt = 0;
  for (let i=0; i<s2.length; i++) {
    if (s2[i] in s1H) {
      cnt++;
      if (s1H[s2[i]]>1) s1H[s2[i]]--;
      else delete s1H[s2[i]];
      console.log(s1H);
    }
  }
  return cnt;
}

module.exports = {
  getCommonCharacterCount
};
