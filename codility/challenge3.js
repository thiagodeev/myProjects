// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A,B){
  let changes = 0;
  let connections = Array(A.length).fill([]);
  let newConnections = Array(A.length).fill([]);

  for (let i = 0; i < A.length; i++) {
    const a = A[i]
    const b = B[i]

    if(!connections[b].includes(a)){
      connections[b].push(a)
    }
  }

  for (let i = 0; i < A.length; i++) {
    const a = A[i]
    const b = B[i]

    if(a == 0){
      B[i] = a;
      A[i] = b;
      changes++;
      newConnections[0].push(b)
      continue;
    }
    if(b == 0){
      newConnections[0].push(b);
      continue;
    }
    if(newConnections[0].includes(b)){
      newConnections[0].push(b);
      continue;
    }
  }

  return changes;
}


console.log(solution([0,2,2,3],[1,1,4,4]))