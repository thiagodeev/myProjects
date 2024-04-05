/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let counter = 0
  let maxCounter = 0
  let index = 0

  do {
    if(s[index] == '('){
      counter++
    } else 
    if(s[index] == ')'){
      counter--
    }
    maxCounter = Math.max(counter, maxCounter)
    index++
  } while (index < s.length);
    
  return maxCounter 
};
console.log(maxDepth(
  "((8+7)*(3+9)-0)*(1*6)"
))
// ()()((())((
/**
 * ((((())())))
 */