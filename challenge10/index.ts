function compile(instructions: string[]): number {
  const registries: Record<string, number> = {};
  const applyInstruction = (instruction: string, index: number): number => {
    const [command, arg1, arg2] = instruction.split(" ");
    if (isNaN(Number(arg1)) && !(arg1 in registries)) {
      registries[arg1] = 0;
    }
    if (arg2 && isNaN(Number(arg2)) && !(arg2 in registries)) {
      registries[arg2] = 0;
    }
    switch (command) {
      case "MOV": {
        registries[arg2] = isNaN(Number(arg1))
          ? registries[arg1]
          : Number(arg1);
        break;
      }
      case "INC": {
        registries[arg1] += 1;
        break;
      }
      case "DEC": {
        registries[arg1] -= 1;
        break;
      }
      case "JMP": {
        if (registries[arg1] === 0) {
          return Number(arg2);
        }
        break;
      }
    }
    return index + 1;
  };
  let pointer = 0;
  while (pointer < instructions.length) {
    pointer = applyInstruction(instructions[pointer], pointer);
  }
  return registries["A"];
}

const instructions = [
  "MOV -1 C", // copia -1 al registro 'C',
  "INC C", // incrementa el valor del registro 'C'
  "JMP C 1", // salta a la instrucción en el índice 1 si 'C' es 0
  "MOV C A", // copia el registro 'C' al registro 'a',
  "INC A", // incrementa el valor del registro 'a'
];

console.log(compile(instructions)); // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */
