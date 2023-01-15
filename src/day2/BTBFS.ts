// binary tree BFS -- go layer by layer of the tree
// use a queue to manage the sequencing

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let q: Array<BinaryNode<number> | null> = [head];

    while (q.length) {
        const curr = q.shift();
        if (!curr) continue;
        if (curr.value === needle) return true;

        if (curr.left) q.push(curr.left);
        if (curr.right) q.push(curr.right);
    }

    return false;
}
