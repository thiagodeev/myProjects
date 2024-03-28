/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let fibonacci = [0,1,1]
  if(n == 0) return fibonacci[0];


  let i = 2
  while (i<=n) {
    fibonacci[2] = fibonacci[0] + fibonacci[1]
    fibonacci[0] = fibonacci[1]
    fibonacci[1] = fibonacci[2]
    i++
  }

  return fibonacci[2]
};