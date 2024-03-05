// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let totalSum = A.reduce((acc, val) => acc + val, 0);
  let leftSum = 0;
  let minimalDifference = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < A.length - 1; i++) {
      leftSum += A[i];
      let rightSum = totalSum - leftSum;
      let difference = Math.abs(leftSum - rightSum);
      minimalDifference = Math.min(minimalDifference, difference);
  }

  return minimalDifference;
}

console.log(solution([3,1,4,5,7,6,8]))