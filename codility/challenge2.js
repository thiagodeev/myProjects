// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S){
  let isAPlayerHere = Array(S.length).fill(true);
  let canMove = 0;


  for (let i = 0; i < S.length; i++) {
    if(S[i] == "^" || S[i] == "v"){
      isAPlayerHere[i] = false;
      canMove++;
      continue;
    }
    if(S[i] == "<"){
      if(i == 0 || isAPlayerHere[i - 1] == false){
        isAPlayerHere[i] = false;
        canMove++;
        continue;
      }
    }
    if(S[i] == ">"){
      if(i == S.length - 1){
        canMove++;
      }
    }
  }

  return canMove;
}

console.log(solution('<<^<v>>'))