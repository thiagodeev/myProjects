/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  let index = 0
  let unicode = 0

  do {
    unicode = Math.abs(s.charCodeAt(index) - s.charCodeAt(index + 1))

    if(unicode == 32){
      s = s.substring(0, index) + s.substring(index + 2)
      if(index > 0) index--
      continue
    }
    index++
  } while (index < s.length);

  return s
};
console.log(makeGood(
  "leEeetcode"
))