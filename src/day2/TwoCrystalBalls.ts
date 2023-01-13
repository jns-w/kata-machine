// two crystal balls drop
// find out where it breaks
// the key is to find out its limit in the most optimised way

export default function two_crystal_balls(breaks: boolean[]): number {
    const len = breaks.length;
    if (!len) return -1;

    let i = 0;
    let jump = Math.sqrt(len);

    while (i < len) {
        i = i + jump;
        if (breaks[i]) break;
    }

    // now i is the end limit

    let j = i - jump;

    while (j < i) {
        if (breaks[j]) return j;
        j++;
    }
    return -1;
}
