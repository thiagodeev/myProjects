// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let filtredArray = [...new Set(A)];
  if(filtredArray.length != A.length) return 0;

  const N = A.length;
  let correctSum = (N * (N + 1)) / 2;
  let arraySum = A.reduce((a, b) => a + b);

  return correctSum == arraySum ? 1 : 0;
}

console.log(solution([1,2,3,5]))


