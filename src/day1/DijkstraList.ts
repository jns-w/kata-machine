/* so for this algo, it is designed to look for all possible routes (greedy)
 *
 */
function hasUnvisited(seen: Array<boolean>, dists: Array<number>): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity); // check if is seen & distance is not inifinity
}

function getLowestUnvisited(
    seen: Array<boolean>,
    dists: Array<number>,
): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; ++i) {
        if (seen[i]) continue;

        // found a distance that is lower
        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i];
            idx = i;
        }
    }
    return idx;
}

export default function dijkstra_list(
    source: number,
    sink: number, // where we want to go to
    arr: WeightedAdjacencyList,
): number[] {
    const seen = new Array(arr.length).fill(false);
    const prev = new Array(arr.length).fill(-1);
    const dists = new Array(arr.length).fill(Infinity);
    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;

        const edges = arr[curr];
        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            if (seen[edge.to]) continue;

            const dist = dists[curr] + edge.weight;

            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }
    }

    const out: Array<number> = [];
    let curr = sink;

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }
    out.push(source);
    return out.reverse();
}
