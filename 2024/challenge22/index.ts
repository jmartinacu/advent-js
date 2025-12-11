function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = [];

  const backtrack = (step: number, current: string[], size: number) => {
    if (current.length === size) {
      result.push([...current]);
      return;
    }
    for (let i = step; i < gifts.length; i++) {
      current.push(gifts[i]);
      backtrack(i + 1, current, size);
      current.pop();
    }
  };
  for (let size = 1; size <= gifts.length; size++) {
    backtrack(0, [], size);
  }
  return result;
}

console.log(generateGiftSets(["car", "doll", "puzzle"]));
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]
console.log();

console.log(generateGiftSets(["ball"]));
// [
//   ['ball']
// ]
console.log();

console.log(generateGiftSets(["game", "pc"]));
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
