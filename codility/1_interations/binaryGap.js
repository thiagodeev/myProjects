// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let binaryNumber = Number(A).toString(2);
  let binaryGaps = [...binaryNumber.matchAll(/(?<=1)0+(?=1)/g)];
  if(binaryGaps.length == 0) return 0;

  let largestGap = binaryGaps[0][0].length; // Assume the first string is the largest
  console.log(binaryGaps)
  for (let i = 1; i < binaryGaps.length; i++) {
      if (binaryGaps[i][0].length > largestGap) {
          largestGap = binaryGaps[i][0].length;
      }
  }
  
  return largestGap
}

console.log(solution(328))