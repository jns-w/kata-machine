const search = (curr: BinaryNode<number> | null, needle: number): boolean => {
// base cases
// reached bottom of the tree
  if (curr === null) return false;
// found
  if (curr.value === needle) return true;

  // traverse
  // if the needle is more than the node val -- we search right (bigger nums)
  if (needle > curr.value) return search(curr.right, needle);
  return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}
