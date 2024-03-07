// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A){
  let counters = Array(N).fill(0);
  let lastMaxCounter = 0;
  let biggestCounter = 0;

  for (let i = 0; i < A.length; i++) {
    let X = A[i];

    if(X <= N){
      let value = counters[X - 1];
      
      if(value < lastMaxCounter) {
        value = lastMaxCounter + 1;
      } else {
        value++;
      }
      counters[X - 1] = value;

      if(value > biggestCounter) biggestCounter = value;
      continue;
    }
    if(X == N + 1) {
      lastMaxCounter = biggestCounter;
      continue;
    }
  }

  counters = counters.map(el => el <= lastMaxCounter ? lastMaxCounter : el)
  return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]))