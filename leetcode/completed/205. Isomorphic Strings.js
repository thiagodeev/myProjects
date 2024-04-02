/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let lettersA = new Map();
  let lettersB = new Map();
  let i = 0;

  do {
    lettersA.set(s[i], t[i])
    lettersB.set(t[i], s[i])
    i++
  } while (i < s.length);

  i = 0;
  
  do {
    if(lettersA.get(s[i]) != t[i] || lettersB.get(t[i]) != s[i]){
      return false
    }
    i++
  } while (i < s.length);

  return true
};
console.log(isIsomorphic('egg', 'add'))