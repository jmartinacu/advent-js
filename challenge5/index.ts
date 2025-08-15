type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const result: number[] = [];
  const sizes: Record<number, number> = {};
  for (const shoe of shoes) {
    if (!(shoe.size in sizes)) {
      sizes[shoe.size] = 0;
    }
    if (shoe.type === "I") {
      if (sizes[shoe.size] < 0) {
        result.push(shoe.size);
      }
      sizes[shoe.size] += 1;
    } else if (shoe.type === "R") {
      if (sizes[shoe.size] > 0) {
        result.push(shoe.size);
      }
      sizes[shoe.size] -= 1;
    }
  }
  return result;
}

const shoes: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));
// [38, 42]
console.log();

const shoes2: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
console.log(organizeShoes(shoes2));
// [38, 38]
console.log();

const shoes3: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

console.log(organizeShoes(shoes3));
// []
console.log();
