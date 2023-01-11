export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // breath first search --- head, left & right, left is now head, head, left & right
    // the idea is to go through the tree layer by layer
    // create queue (FIFO) that contains head
    // base case check if there was any node in queue
    // check if current node value is search needle
    // push left & right into queue and loop on

    const q: Array<BinaryNode<number> | undefined | null> = [head];

    while (q.length) {
        const curr = q.shift() as BinaryNode<number> | undefined | null;

        if (!curr) continue;

        // search
        if (curr.value === needle) {
            return true;
        }
        q.push(curr.left);
        q.push(curr.right);
    }
    return false;
}
