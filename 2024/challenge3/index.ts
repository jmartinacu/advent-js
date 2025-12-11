type Inventory = Array<
  { name: string; quantity: number; category: string }
>;

function organizeInventory1(inventory: Inventory): object {
  const result: Record<string, Record<string, number>> = {};
  for (const item of inventory) {
    const { name, quantity, category } = item;
    if (!result[category]) {
      result[category] = {};
    }
    if (!result[category][name]) {
      result[category][name] = 0;
    }
    result[category][name] += quantity;
  }
  return result;
}

function organizeInventory2(inventory: Inventory): object {
  return inventory.reduce((acc, item) => {
    const { name, quantity, category } = item;
    if (!acc[category]) {
      acc[category] = {};
    }
    if (!acc[category][name]) {
      acc[category][name] = 0;
    }
    acc[category][name] += quantity;
    return acc;
  }, {} as Record<string, Record<string, number>>);
}

function organizeInventory3(inventory: Inventory): object {
  return inventory.reduce((acc, { name, quantity, category }) => {
    acc[category] = acc[category] || {};
    acc[category][name] = (acc[category][name] || 0) + quantity;
    return acc;
  }, {} as Record<string, Record<string, number>>);
}

const inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

console.log(organizeInventory2(inventory));
console.log("----");

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }
// }

const inventory2 = [
  { name: "book", quantity: 10, category: "education" },
  { name: "book", quantity: 5, category: "education" },
  { name: "paint", quantity: 3, category: "art" },
];

console.log(organizeInventory2(inventory2));

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
