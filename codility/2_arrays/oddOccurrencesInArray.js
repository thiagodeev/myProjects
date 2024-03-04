// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let result = 0;
  for (let i = 0; i < A.length; i++) {
      result ^= A[i];
  }
  return result;
}

console.log(solution([3,5,3,1,5]))