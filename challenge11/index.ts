function decodeFilename(filename: string): string {
  filename = filename.split(".").slice(0, -1).join(".");
  return filename.split("_").slice(1).join("_");
}

console.log(decodeFilename("2023122512345678_sleighDesign.png.grinchwa"));
// ➞ "sleighDesign.png"

console.log();
console.log(decodeFilename("42_chimney_dimensions.pdf.hack2023"));
// ➞ "chimney_dimensions.pdf"

console.log();
console.log(decodeFilename("987654321_elf-roster.csv.tempfile"));
// ➞ "elf-roster.csv"
