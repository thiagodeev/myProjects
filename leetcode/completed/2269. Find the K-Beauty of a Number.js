/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
  let string = num.toString();
  if(string.length < k) return 0

  let left = 0
  let counter = 0
  let currentNumber = 0
  let right = k

  for (; right <= string.length;) {
    currentNumber = Number.parseInt(string.slice(left, right))
    if(num % currentNumber == 0) counter++

    right++
    left++
  }

  return counter
};
console.log(divisorSubstrings(2, 1))