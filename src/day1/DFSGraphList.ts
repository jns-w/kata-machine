/*
 * the design of the graph--
 * works by having an array of arrays
 * each array within main array represents a vertex, in it, we have a objects/tuples that represents each edge that links to other vertices
 */
const walk = (
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: Array<boolean>,
    path: Array<number>,
): boolean => {
    // base case

    // alr seen
    if (seen[curr]) return false;

    // now set it to seen
    seen[curr] = true;

    // recursion
    // pre
    path.push(curr);
    // found needle
    if (curr === needle) return true;
    // recurse
    const list = graph[curr];
    for (let i = 0; i < list.length; i++) {
        const edge = list[i];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }
    // path
    path.pop();

    return false;
};
export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen: Array<boolean> = new Array(graph.length).fill(false);
    const path: Array<number> = [];

    walk(graph, source, needle, seen, path);

    if (path.length === 0) return null;

    return path;
}
