const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  if(typeof str != 'string') str = str+'';
  if(options.addition||options.addition===null&&typeof options.addition != 'string') options.addition = options.addition+'';
  let resultA = [];
  let result = '';
  let preResult = [];
    for (let j=0;j<(options.additionRepeatTimes?options.additionRepeatTimes:1);j++) {
      preResult.push(options.addition);
    } 
    preResult = preResult.join(options.additionSeparator?options.additionSeparator:"|");
    result = str+ preResult;

  for (let i=0;i<(options.repeatTimes?options.repeatTimes:1);i++) {
    resultA.push(result);
  }
  result = resultA.join(options.separator?options.separator:"+");
  return result;
}

module.exports = {
  repeater
};
