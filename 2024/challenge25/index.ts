function execute(code: string): number {
  let result = 0;
  let pointer = 0;
  const stack: Array<number> = [];
  const execInstruction = (instruction: string) => {
    switch (instruction) {
      case "+":
        result++;
        break;
      case "-":
        result--;
        break;
      case ">":
        break;
      case "[":
        if (result === 0) pointer = code.indexOf("]", pointer);
        else stack.push(pointer - 1);
        break;
      case "]":
        if (result !== 0) pointer = stack.pop()!;
        break;
      case "{":
        if (result === 0) pointer = code.indexOf("}", pointer);
        break;
      case "}":
        break;
    }
    pointer++;
  };
  while (pointer < code.length) {
    const instruction = code[pointer];
    execInstruction(instruction);
  }
  return result;
}

console.log(execute("+++")); // 3
console.log(execute("+--")); // -1
console.log(execute(">+++[-]")); // 0
console.log(execute(">>>+{++}")); // 3
console.log(execute("+{[-]+}+")); // 2
console.log(execute("{+}{+}{+}")); // 0
console.log(execute("------[+]++")); // 2
console.log(execute("-[++{-}]+{++++}")); // 5
