// export default function bs_list(haystack: number[], needle: number): boolean {
//     let low = 0;
//     let high = haystack.length - 1;
//
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);
//
//         let v = haystack[mid];
//
//         if (needle === v) return true;
//
//         if (needle < v) high = --mid;
//         if (needle > v) low = ++mid;
//     }
//     return false;
// }
export default function bs_list(haystack: number[], needle: number): boolean {
    return binarySearch(haystack, needle, 0, haystack.length - 1);
}

const binarySearch = (
    haystack: Array<number>,
    needle: number,
    low: number,
    high: number,
): boolean => {
    if (low > high) return false;
    let mid = Math.floor(low + (high - low) / 2);

    let v = haystack[mid];

    if (needle === v) return true;

    if (needle < v) return binarySearch(haystack, needle, low, mid - 1);
    if (needle > v) return binarySearch(haystack, needle, mid + 1, high);

    return false;
};

// export default function bs_list(haystack: number[], needle: number): boolean {
//     let low = 0;
//     let high = haystack.length - 1;
//
//     while (low <= high) {
//         let mid = Math.floor(low + (high - low) / 2);
//
//         let val = haystack[mid];
//
//         if (val === needle) return true;
//
//         if (needle < val) {
//             high = mid - 1;
//         } else if (needle > val) {
//             low = mid + 1;
//         }
//     }
//
// //     return false;
// }
//
// export default function bs_list(haystack: number[], needle: number): boolean {
//     return binarySearch(haystack, needle, 0, haystack.length - 1);
// }
//
// const binarySearch = (
//     haystack: Array<number>,
//     needle: number,
//     low: number,
//     high: number,
// ): boolean => {
//     if (low > high) return false;
//     let mid = Math.floor(low + (high - low) / 2);
//     let val = haystack[mid];
//     if (needle === val) return true;
//     if (needle < val) return binarySearch(haystack, needle, low, mid - 1);
//     if (needle > val) return binarySearch(haystack, needle, mid + 1, high);
//     return false;
// };
