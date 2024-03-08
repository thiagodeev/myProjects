// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S,P,Q) {
  const dnaImpactFactors = dnaToImpactFactors(S);
  let response = [];

  for (let i = 0; i < P.length; i++) {
    response.push(Math.min(...dnaImpactFactors.slice(P[i], Q[i] + 1)));
  }

  return response
}

function dnaToImpactFactors(array){
  let result = [];
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "A":
        result.push(1)
        break;
      case "C":
        result.push(2)
        break;
      case "G":
        result.push(3)
        break;
      case "T":
        result.push(4)
        break;
    }
  }

  return result
}

// function count_total(P, x, y){
//   return P[y + 1] - P[x]
// }

console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]))


