function search(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) return false;
    const val = curr.value;
    if (val === needle) return true;

    if (needle < val) return search(curr.left, needle);
    if (needle > val) return search(curr.right, needle);

    return false;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}
