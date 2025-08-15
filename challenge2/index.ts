function createFrame(names: string[]): string {
  const borderChar = "*";
  const maxLength = Math.max(...names.map((name) => name.length + 4));
  let result = borderChar.repeat(maxLength) + "\n";
  for (const name of names) {
    const paddedName = name.padEnd(maxLength - 4, " ");
    result += `${borderChar} ${paddedName} ${borderChar}\n`;
  }
  result += borderChar.repeat(maxLength);
  return result;
}

console.log(createFrame(["midu", "madeval", "educalvolpz"]));
console.log("");

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(["midu"]));
console.log("");

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(["a", "bb", "ccc"]));
console.log("");

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(["a", "bb", "ccc", "dddd"]));
