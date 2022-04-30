const { NotImplementedError } = require('../extensions/index.js');

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
  let obj = {};

  function countAndAddElemsToObj(elem) {
    if (elem in obj) obj[elem]++;
      else obj[elem] = 1;
  }

  for (let elem of domains) {
    let elemArr = elem.split('.');
    elemArr.reverse();
    console.log(elemArr,);
    let elemToAdd = '';
    for (let i=0; i<elemArr.length;i++) {
      elemToAdd += `.${elemArr[i]}`;
      console.log(elemToAdd);
      countAndAddElemsToObj(elemToAdd);
    }
  }
      return(obj);
}

module.exports = {
  getDNSStats
};
