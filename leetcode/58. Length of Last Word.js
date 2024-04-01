/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if(s.length == 1) return 1
  let length = 0;
  let wordEnd;

  for (let index = s.length - 1; index >= 0; index--) {
    if(s.charAt(index) == ' '){
      if(wordEnd != undefined){
        length = wordEnd - index
        break
      }
    } else if(wordEnd == undefined){
      wordEnd = index;
    }
  }

  return length == 0 ? s.length - (s.length - (wordEnd + 1)) : length
};
console.log(lengthOfLastWord('aaa  '))
/**
 * l 13
 * w 5
 */