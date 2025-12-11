function isRobotBack(moves: string): true | [number, number] {
  const origin: [number, number] = [0, 0];
  let currentPosition = origin;
  const lastMoves: string[] = [];
  const oppositeMove = {
    L: "R",
    R: "L",
    U: "D",
    D: "U",
  };
  const makeMove = (move: string, index: number): number => {
    let res = index + 1;
    const lastIndex = index === moves.length - 1;
    switch (move) {
      case "L":
        currentPosition = [currentPosition[0] - 1, currentPosition[1]];
        lastMoves.push("L");
        break;
      case "R":
        currentPosition = [currentPosition[0] + 1, currentPosition[1]];
        lastMoves.push("R");
        break;
      case "U":
        currentPosition = [currentPosition[0], currentPosition[1] + 1];
        lastMoves.push("U");
        break;
      case "D":
        currentPosition = [currentPosition[0], currentPosition[1] - 1];
        lastMoves.push("D");
        break;
      case "*":
        if (!lastIndex && ["L", "R", "U", "D"].includes(moves[res])) {
          makeMove(moves[res], index);
        }
        break;
      case "!":
        if (!lastIndex && ["L", "R", "U", "D"].includes(moves[res])) {
          res = makeMove(
            oppositeMove[moves[res] as keyof typeof oppositeMove],
            res,
          );
        }
        break;
      case "?":
        if (!lastIndex && lastMoves.includes(moves[res])) {
          res = index + 2;
        }
        break;
    }
    return res;
  };

  let pointer = 0;

  while (pointer < moves.length) {
    const move = moves[pointer];
    pointer = makeMove(move, pointer);
  }

  return currentPosition[0] === origin[0] && currentPosition[1] === origin[1]
    ? true
    : currentPosition;
}

console.log(isRobotBack("R")); // [1, 0]
console.log(isRobotBack("RL")); // true
console.log(isRobotBack("RLUD")); // true
console.log(isRobotBack("*RU")); // [2, 1]
console.log(isRobotBack("R*U")); // [1, 2]
console.log(isRobotBack("LLL!R")); // [-4, 0]
console.log(isRobotBack("R?R")); // [1, 0]
console.log(isRobotBack("U?D")); // true
console.log(isRobotBack("R!L")); // [2,0]
console.log(isRobotBack("U!D")); // [0,2]
console.log(isRobotBack("R?L")); // true
console.log(isRobotBack("U?U")); // [0,1]
console.log(isRobotBack("*U?U")); // [0,2]
console.log(isRobotBack("U?D?U")); // true

// Ejemplos paso a paso:
console.log(isRobotBack("R!U?U")); // [1,0]
// 'R'  -> se mueve a la derecha
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

console.log(isRobotBack("UU!U?D")); // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
