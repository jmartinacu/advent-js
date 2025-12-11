function detectBombs(grid: boolean[][]): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < grid.length; i++) {
    result.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      let bombs = 0;
      if (i > 0 && j > 0 && grid[i - 1][j - 1]) bombs++; // Top-left
      if (i > 0 && grid[i - 1][j]) bombs++; // Top
      if (i > 0 && j < grid[i].length - 1 && grid[i - 1][j + 1]) bombs++; // Top-right
      if (j > 0 && grid[i][j - 1]) bombs++; // Left
      if (j < grid[i].length - 1 && grid[i][j + 1]) bombs++; // Right
      if (i < grid.length - 1 && j > 0 && grid[i + 1][j - 1]) bombs++; // Bottom-left
      if (i < grid.length - 1 && grid[i + 1][j]) bombs++; // Bottom
      if (i < grid.length - 1 && j < grid[i].length - 1 && grid[i + 1][j + 1]) {
        bombs++; // Bottom-right
      }
      result[i].push(bombs);
    }
  }
  return result;
}

console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]));
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
  [true, false],
  [false, false],
]));
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(detectBombs([
  [true, true],
  [false, false],
  [true, true],
]));
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
