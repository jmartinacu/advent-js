function calculatePrice(ornaments: string): number | undefined {
  let result = 0;
  const prices = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  for (let i = 0; i < ornaments.length; i++) {
    const ornament = ornaments[i];
    if (!["*", "o", "^", "#", "@"].includes(ornament)) return undefined;
    const currentOrnament = ornament as "*" | "o" | "^" | "#" | "@";
    if (
      i < ornaments.length - 1 &&
      ["*", "o", "^", "#", "@"].includes(ornaments[i + 1]) &&
      prices[ornaments[i + 1] as "*" | "o" | "^" | "#" | "@"] >
        prices[currentOrnament]
    ) {
      result -= prices[currentOrnament];
    } else {
      result += prices[currentOrnament];
    }
  }
  return result;
}

console.log(calculatePrice("***")); // 3   (1 + 1 + 1)
console.log(calculatePrice("*o")); // 4   (5 - 1)
console.log(calculatePrice("o*")); // 6   (5 + 1)
console.log(calculatePrice("*o*")); // 5  (-1 + 5 + 1)
console.log(calculatePrice("**o*")); // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice("o***")); // 8   (5 + 3)
console.log(calculatePrice("*o@")); // 94  (-5 - 1 + 100)
console.log(calculatePrice("*#")); // 49  (-1 + 50)
console.log(calculatePrice("@@@")); // 300 (100 + 100 + 100)
console.log(calculatePrice("#@")); // 50  (-50 + 100)
console.log(calculatePrice("#@Z")); // undefined (Z es desconocido)
