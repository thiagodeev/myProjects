// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const N = A.length + 1;
  let totalSum = (N * (N + 1)) / 2;
  let arraySum = 0;

  for (let i = 0; i < A.length; i++) {
      arraySum += A[i];
  }

  return totalSum - arraySum;
}

console.log(solution([3,1,4,5,7,6,8]))