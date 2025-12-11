function treeHeight(
  // deno-lint-ignore no-explicit-any
  tree: { value: string; left: any; right: any } | null,
): number {
  let result = 0;
  if (tree === null) return 0;
  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);
  result = Math.max(leftHeight, rightHeight) + 1;
  return result;
}

// Definición del árbol
const tree = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null,
    },
    right: {
      value: "🎅",
      left: null,
      right: null,
    },
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null,
    },
  },
};

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
console.log(treeHeight(tree));
// Devuelve: 3
