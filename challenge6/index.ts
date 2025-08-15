function inBox(box: string[]): boolean {
  let result = false;
  for (let i = 0; i < box.length; i++) {
    if (box[i].includes("*")) {
      result = true;
      if (
        i === 0 || i === box.length - 1 || box[i][0] === "*" ||
        box[i][box[i].length - 1] === "*"
      ) {
        result = false;
      }
      break;
    }
  }
  return result;
}

console.log(inBox([
  "###",
  "#*#",
  "###",
])); // ➞ true
console.log();

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####",
])); // ➞ true
console.log();

console.log(inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####",
])); // ➞ false
console.log();

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####",
])); // ➞ false
console.log();
