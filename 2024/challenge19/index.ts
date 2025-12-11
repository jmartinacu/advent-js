function distributeWeight(weight: number): string {
  let result = "";
  type BoxWeight = 10 | 5 | 2 | 1;
  const boxRepresentations = new Map<BoxWeight, string[]>([
    [10, [" _________ ", "|         |", "|_________|"]],
    [5, [" _____ ", "|     |", "|_____|"]],
    [2, [" ___ ", "|___|"]],
    [1, [" _ ", "|_|"]],
  ]);
  const boxCounts: Record<BoxWeight, number> = { 1: 0, 2: 0, 5: 0, 10: 0 };
  for (const boxWeight of boxRepresentations.keys()) {
    boxCounts[boxWeight] = Math.floor(weight / boxWeight);
    weight -= boxCounts[boxWeight] * boxWeight;
  }
  for (const [boxWeight, count] of Object.entries(boxCounts)) {
    const parsedBoxWeight = parseInt(boxWeight) as BoxWeight;
    const lesserWeightsWithBox = boxRepresentations.keys().filter((w) =>
      w !== parsedBoxWeight && w < parsedBoxWeight && boxCounts[w] > 0
    ).toArray();
    if (count > 0) {
      if (lesserWeightsWithBox.length > 0) {
        const neighborBoxFloor = boxRepresentations.get(
          Math.max(...lesserWeightsWithBox) as BoxWeight,
        )!.at(-1)!;
        const currentBoxFloor = boxRepresentations.get(parsedBoxWeight)!.at(
          -1,
        )!;
        const boxCeil = "_".repeat(
          currentBoxFloor.length - (neighborBoxFloor.length + 1),
        );
        const firstRepresentation = [boxCeil].concat(
          boxRepresentations.get(parsedBoxWeight)!.slice(1),
        );
        result += firstRepresentation.join("\n");
        if (count > 1) {
          result += "\n" +
            (boxRepresentations.get(parsedBoxWeight)?.slice(1).join("\n") +
              "\n").repeat(
                count - 1,
              );
        }
      } else {
        result += boxRepresentations.get(parsedBoxWeight)!.join("\n");
        if (count > 1) {
          result += "\n" +
            (boxRepresentations.get(parsedBoxWeight)?.slice(1).join("\n") +
              "\n").repeat(
                count - 1,
              );
        }
      }
    }
  }
  return result.trimEnd();
}

console.log(distributeWeight(1));
// Devuelve:
//  _
// |_|

console.log(distributeWeight(2));
// Devuelve:
//  ___
// |___|

console.log(distributeWeight(3));
// Devuelve:
//  _
// |_|_
// |___|

console.log(distributeWeight(4));
// Devuelve:
//  ___
// |___|
// |___|

console.log(distributeWeight(5));
// Devuelve:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6));
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

console.log(distributeWeight(121));
