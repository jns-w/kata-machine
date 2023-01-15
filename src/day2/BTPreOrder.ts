// pre order traversal ---- head -> left -> right
//

function walk(
    curr: BinaryNode<number> | null,
    path: Array<number>,
): Array<number> {
    // break case
    if (!curr) return path;

    path.push(curr.value);

    walk(curr.left, path);
    walk(curr.right, path);

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
