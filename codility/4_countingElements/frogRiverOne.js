// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  const covered = new Array(X + 1).fill(false);
  let uncovered = X;

  for (let i = 0; i < A.length; i++) {
      if (!covered[A[i]]) {
          covered[A[i]] = true;
          uncovered--;
      }
      if (uncovered === 0) {
          return i;
      }
  }

  return -1; // If the frog is never able to jump to the other side
}

// Example usage:
const X = 5;
const A = [1, 5, 1, 3, 2, 3, 5, 4];
console.log(solution(X, A)); // Output: 6