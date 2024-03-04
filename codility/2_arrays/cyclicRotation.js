// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let shiftedArray = [...A];
  let workingArray = [...A];

  for (let i = 0; i < K; i++) {
      for (let j = 0; j < workingArray.length; j++) {
          if(j == 0){
              shiftedArray[j] = workingArray[workingArray.length - 1];
              continue;
          }
          shiftedArray[j] = workingArray[j - 1];
      }
      workingArray = [...shiftedArray];
  }

  return shiftedArray
}

console.log(solution([[-4], 0], 1))