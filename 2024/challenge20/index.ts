function fixGiftList(
  received: string[],
  expected: string[],
): { missing: Record<string, number>; extra: Record<string, number> } {
  // Escribe tu código aquí
  const missing: Record<string, number> = {};
  const extra: Record<string, number> = {};
  const expectedItems = new Set(expected);
  for (const item of expectedItems) {
    const receivedCount = received.filter((i) => i === item).length;
    const expectedCount = expected.filter((i) => i === item).length;
    if (receivedCount < expectedCount) {
      missing[item] = expectedCount - receivedCount;
    } else if (receivedCount > expectedCount) {
      extra[item] = receivedCount - expectedCount;
    }
  }
  const notExpectedItems = new Set(
    received.filter((i) => !expectedItems.has(i)),
  );
  for (const item of notExpectedItems) {
    const receivedCount = received.filter((i) => i === item).length;
    extra[item] = receivedCount;
  }
  return { missing, extra };
}

console.log(fixGiftList(["puzzle", "car", "doll", "car"], [
  "car",
  "puzzle",
  "doll",
  "ball",
]));
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(fixGiftList(
  ["book", "train", "kite", "train"],
  ["train", "book", "kite", "ball", "kite"],
));
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(fixGiftList(
  ["bear", "bear", "car"],
  ["bear", "car", "puzzle", "bear", "car", "car"],
));
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]));
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
