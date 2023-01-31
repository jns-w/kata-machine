export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let q: Array<BinaryNode<number>> = [head];

    while (q.length) {
        const curr = q.shift();
        if (!curr) return false;
        const val = curr.value;

        if (needle === val) return true;

        if (curr.left) q.push(curr.left);
        if (curr.right) q.push(curr.right);
    }
    return false;
}
