// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  let result = Math.ceil((Y-X) / D)
  return result
}

console.log(solution(5, 105, 3))