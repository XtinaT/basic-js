const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let newArr = [];
  for (let i=0;i<arr.length;i++) {
    newArr.push(arr[i]);
    if (arr[i]=='--discard-next') {
      newArr.pop(arr[i]);
      i++;
    }
    if (arr[i]=='--discard-prev') {
      newArr.pop(arr[i]);
      console.log(arr[i-1]);
      if (arr[i-1]&&newArr.includes(arr[i-1])) newArr.pop(arr[i-1]);
    }
    if (arr[i]=='--double-next') {
      newArr.pop(arr[i]);
      if (arr[i+1]) newArr.push(arr[i+1]);
    }
    if (arr[i]=='--double-prev') {
      newArr.pop(arr[i]);
      if (arr[i-1]&&newArr.includes(arr[i-1])) newArr.push(arr[i-1]);
    }
  }
  return newArr;
}

module.exports = {
  transform
};
