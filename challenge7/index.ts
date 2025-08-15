function fixPackages(packages: string): string {
  const stack: number[] = [];
  for (let i = 0; i < packages.length; i++) {
    if (packages[i] === "(") {
      stack.push(i);
    } else if (packages[i] === ")") {
      const start = stack.pop();
      if (start !== undefined) {
        const reversed = packages.slice(start + 1, i).split("").reverse().join(
          "",
        );
        packages = packages.slice(0, start + 1) + reversed + packages.slice(i);
      }
    }
  }
  return packages.split("").filter((c) => c !== "(" && c !== ")").join("");
}

console.log(fixPackages("a(cb)de"));
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis
console.log();

console.log(fixPackages("a(bc(def)g)h"));
console.log();
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages("abc(def(gh)i)jk"));
console.log();
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages("a(b(c))e"));
console.log();
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
