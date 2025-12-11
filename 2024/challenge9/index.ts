type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
  let result: Result = "none";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell !== "@") continue;
      const [nextI, nextJ] = (() => {
        switch (mov) {
          case "U":
            return [i - 1, j];
          case "D":
            return [i + 1, j];
          case "L":
            return [i, j - 1];
          case "R":
            return [i, j + 1];
        }
      })();
      if (
        (nextI < 0 || nextI >= board.length || nextJ < 0 ||
          nextJ >= board[i].length) || board[nextI][nextJ] === "o"
      ) {
        result = "crash";
      } else if (board[nextI][nextJ] === "*") {
        result = "eat";
      }
      break;
    }
  }
  return result;
}

const board = [
  "·····",
  "*····",
  "@····",
  "o····",
  "o····",
];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, "R"));
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
