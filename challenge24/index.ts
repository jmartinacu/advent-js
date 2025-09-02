// deno-lint-ignore-file no-explicit-any
function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined,
): [boolean, string] {
  const root = tree1?.value || "";
  const checkMirrorTrees = (
    node1: { value: string; left?: any; right?: any } | undefined,
    node2: { value: string; left?: any; right?: any } | undefined,
  ): boolean => {
    let result = node1?.value === node2?.value;
    if (result && node1 && node2) {
      result = checkMirrorTrees(node1?.left, node2?.right) &&
        checkMirrorTrees(node1?.right, node2?.left);
    }
    return result;
  };
  const synchronized = checkMirrorTrees(tree1, tree2);
  return [synchronized, root];
}

const tree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const tree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};

console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};

console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']

const tree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']

console.log(isTreesSynchronized(
  { value: "🎅" },
  { value: "🧑‍🎄" },
)); // [false, '🎅']
