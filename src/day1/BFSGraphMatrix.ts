/*
 *
 * we have a matrix
 *   0 1 2 3 4 5 6
 * 0 x x x x x x x
 * 1 x x x x x x x
 * 2 x x x x x x x
 * 3 x x x x x x x
 * 4 x x x x x x x
 * 5 x x x x x x x
 * 6 x x x x x x x
 *
 * GRAPH DESIGN
 *
 * [
 *   [{},{},{}],
 *   [{},{},{}],
 *   [{},{},{}]
 * ]
 *
 * each row representing a node, maybe imagine it like a table
 * in each arr, we have its edge relation to others, even redundant ones (memory heavy)
 * we can see the relationship between each node
 *
 * source -- where we start
 *
 * because this is BFS , we use a queue FIFO (first in first out)
 *
 * we need to know path because unlike trees, we could get loops in a graph
 * solution comes in the form of prev arr and seen arr and a queue
 * seen -- an array of falses , set to true once vertex has been visited
 * prev -- an array of -1s, when accessing a child, we set the prev[child] to the parent
 * queue -- starts off with source node
 *
 * STEPS:
 * start a loop
 * take the first thing out of queue
 * take children of the above node, and add them to queue
 * loop ends if there is nothing left in queue
 * since this is a search, there break case is also once value is found
 * if seen then continue
 * else
 * set seen[i] to true
 * set prev[i] to curr -- because we are in the children of curr now, setting the curr on the prev[i] arr means pointing to the parent
 * this gives us the information to go backwards at the end of the function
 */

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    // aren't we lacking the columns?
    // okay I think because each row is a node, to check, we can just check rows are seen
    // eg. prev arr
    //  0: [-1]
    //  1: [0] -- prev is 0
    //  2: [1] -- prev is 1
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    // start with the source
    seen[source] = true;
    const q: Array<number> = [source];
    // this has to be a do while as it executes first before checking for breaking condition
    do {
        let curr = q.shift() as number; // shift is one letter away from shit -- removal
        // break case
        if (curr === needle) break;

        // get the edges of curr
        const edges = graph[curr]; // this is the row [x,x,x,x,x,x,x,x] if 0, means there is no link
        // this loop is managing the queue check for edges / children, if not seen push into queue
        for (let i = 0; i < edges.length; i++) {
            if (edges[i] === 0 || seen[i]) continue; // if no edge or is seen we cont
            // children exists -- so set the prev
            prev[i] = curr;
            seen[i] = true;
            q.push(i);
        }
    } while (q.length);
    // build backwards -- until -1.. because we want to return the path from source to needle that has been found

    if (prev[needle] === -1) return null;

    // set the curr to be needle
    let curr = needle;
    const out: number[] = []; // the resulting path

    while (prev[curr] !== -1) {
        // keep going until we reach the end - source where the prev is a -1 -- if we never found needle.. we would return -1
        out.push(curr);
        curr = prev[curr];
    }
    return [source].concat(out.reverse());
}

//
//
// SOLUTION
// export default function bfs(
//     graph: WeightedAdjacencyMatrix,
//     source: number,
//     needle: number,
// ): number[] | null {
//     const seen = new Array(graph.length).fill(false);
//     const prev = new Array(graph.length).fill(-1);
//     seen[source] = true;
//     const q: number[] = [source];
//
//     do {
//         const curr = q.shift() as number;
//         if (curr === needle) break;
//
//         // adjacencies
//         const adjs = graph[curr];
//
//         for (let i = 0; i < adjs.length; i++) {
//             if (adjs[i] === 0) {
//                 continue;
//             }
//
//             if (seen[i]) continue;
//             prev[i] = curr;
//             q.push(i);
//         }
//         seen[curr] = true;
//     } while (q.length);
//
//     if (prev[needle] === -1) {
//         return null;
//     }
//
//     // build backwards
//     let curr = needle;
//     const out: number[] = [];
//
//     while (prev[curr] !== -1) {
//         out.push(curr);
//         curr = prev[curr];
//     }
//
//     return [source].concat(out.reverse());
// }
