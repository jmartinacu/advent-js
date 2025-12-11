function removeSnow(s: string): string {
  let duplicates = true;
  let lastIteration = s;
  while (duplicates) {
    for (let i = 1; i < s.length - 1; i++) {
      if (s[i] === s[i + 1]) {
        s = s.slice(0, i) + s.slice(i + 2);
        break;
      } else if (s[i - 1] === s[i]) {
        s = s.slice(0, i - 1) + s.slice(i + 1);
        break;
      }
    }
    if (lastIteration === s) {
      if (s.length === 2 && s[0] === s[1]) s = "";
      duplicates = false;
    }
    lastIteration = s;
  }
  return s;
}

console.log(removeSnow("zxxzoz")); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow("abcdd")); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow("zzz")); // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow("a")); // -> "a"
// No hay montículos repetidos

console.log(removeSnow("aa")); // -> ""
