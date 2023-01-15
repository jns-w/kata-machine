// in order traversal will go
// deepest left start -- parent -- right, go up a level
//    4
//  2   6
// 1 3 5 7

function walk(
    curr: BinaryNode<number> | null,
    path: Array<number>,
): Array<number> {
    if (!curr) return path;

    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
