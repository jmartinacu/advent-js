function drawRace(indices: number[], length: number): string {
  let result = "";
  for (let i = 0; i < indices.length; i++) {
    let line = " ".repeat(indices.length - (i + 1)) + "~".repeat(length);
    if (indices[i] !== 0) {
      const position = indices[i] > 0 ? indices[i] : length + indices[i];
      console.log({ position, length, index: indices[i] });
      line = " ".repeat(indices.length - (i + 1)) + "~".repeat(position) + "r" +
        "~".repeat(length - position - 1);
    }
    result += line + " /" + (i + 1);
    if (i !== indices.length - 1) {
      result += "\n";
    }
  }
  return result;
}

console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log("");
console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log("");
console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
