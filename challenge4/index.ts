function createXmasTree(height: number, ornament: string): string {
  const maxWidth = height * 2 - 1;
  let result = "";
  for (let i = 0; i < height; i++) {
    const ornaments = ornament.repeat(i * 2 + 1);
    const spaces = "_".repeat((maxWidth - ornaments.length) / 2);
    result += `${spaces}${ornaments}${spaces}\n`;
  }
  const trunk = "_".repeat((maxWidth - 1) / 2) + "#" +
    "_".repeat((maxWidth - 1) / 2);
  result += `${trunk}\n${trunk}`;
  return result;
}

const tree = createXmasTree(5, "*");
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
