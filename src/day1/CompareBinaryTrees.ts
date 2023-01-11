export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

  // base cases
  if (a === null && b === null) return true; // structural check
  if (a === null || b === null) return false; // structural check
  if (a.value !== b.value) return false; // value check

  // return true if left and right comparisons are all true
  return compare(a.left, b.left) && compare(a.right, b.right);
}
