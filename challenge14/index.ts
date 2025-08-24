function minMovesToStables(reindeer: number[], stables: number[]): number {
  let result = 0
  reindeer.sort((a, b) => a - b)
  stables.sort((a, b) => a - b)
  for (let i = 0; i < reindeer.length; i++) {
    result += Math.abs(reindeer[i] - stables[i])
  }
  return result
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) // -> 3
// Renos en posiciones: 2, 6, 9
// Establos en posiciones: 3, 8, 5
// 1er reno: se mueve de la posición 2 al establo en la posición 3 (1 movimiento).
// 2do reno: se mueve de la posición 6 al establo en la posición 5 (1 movimiento)
// 3er reno: se mueve de la posición 9 al establo en la posición 8 (1 movimiento).
// Total de movimientos: 1 + 1 + 1 = 3 movimientos

console.log(minMovesToStables([1, 1, 3], [1, 8, 4]))
// Explicación:
// Renos en posiciones: 1, 1, 3
// Establos en posiciones: 1, 8, 4
// 1er reno: no se mueve (0 movimientos)
// 2do reno: se mueve de la posición 1 al establo en la posición 4 (3 movimientos)
// 3er reno: se mueve de la posición 3 al establo en la posición 8 (5 movimientos)
// Total de movimientos: 0 + 3 + 5 = 8 movimientos