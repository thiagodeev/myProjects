// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let prefixSums = prefix_sums(A);
  let pairCount = 0;
  let length = prefixSums.length - 1;

  for (let i = 0; i < A.length; i++) {
    if(A[i] == 0) pairCount += prefixSums[length] - prefixSums[i];
  }

  if(pairCount > 1_000_000_000) return -1
  return pairCount
}

function prefix_sums(A){
  let N = A.length;
  let P = Array(N+1).fill(0);

  for (let K = 1; K < N + 1; K++) {
    P[K] = P[K - 1] + A[K - 1]
  }
  return P
}

// function count_total(P, x, y){
//   return P[y + 1] - P[x]
// }

console.log(solution([0,1,0,1,1]))


