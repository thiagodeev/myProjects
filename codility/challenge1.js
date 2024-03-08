// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  const commands = S.split(" ");
  const maxNumber = 1048575;
  let stack = []

  for (let i = 0; i < commands.length; i++) {
    const value = Number.parseInt(commands[i]);

    if(Number.isNaN(value)){
      switch (commands[i]) {
        case "POP":{
          if(stack.length == 0) return -1
          stack.pop()
          break;
        }
        case "DUP":{
          if(stack.length == 0) return -1
          stack.push(stack[stack.length -1])
          break;
        }
        case "+":{
          if(stack.length < 2) return -1
          const a = stack[stack.length-1]
          const b = stack[stack.length-2]
        
          stack.pop();
          stack.pop();
        
          const sum = a+b;
          if(sum > maxNumber) return -1
          stack.push(sum)
          break;
        }
        case "-":{
          if(stack.length < 2) return -1
          const a = stack[stack.length-1]
          const b = stack[stack.length-2]
        
          stack.pop();
          stack.pop();
        
          const sub = a-b;
          if(sub < 0) return -1
          stack.push(sub)
          break;
        }
      }
    } else {
      if(value > maxNumber) return -1
      stack.push(value);
    }
  }

  return stack.length == 0 ? -1 : stack[stack.length-1];
}

console.log(solution('13 DUP 4 POP 5 DUP + DUP + -'))