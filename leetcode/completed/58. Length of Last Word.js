/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let index = s.length - 1;

  do {
    if(s[index] != ' ') {index--; break}
    index--
  } while(index >= 0)
  if(index <= 0) return 1

  let wordEnd = index + 1;
  do {
    if(s[index] == ' ') break
    index--
  } while(index >= 0)

  return wordEnd - index
};
console.log(lengthOfLastWord('a'))
/**
 * l 8
 * w 5
 */