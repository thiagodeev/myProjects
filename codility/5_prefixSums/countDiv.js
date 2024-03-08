// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K){
  let aDivision = Math.floor((A - 1)/K)
  let bDivision = Math.floor(B/K)

  return bDivision - aDivision
}
console.log(solution(6,11,2))
