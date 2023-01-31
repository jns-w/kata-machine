function sort(arr: Array<number>, l: number, r: number) {
    // break case

    if (l >= r) return;

    let m = Math.floor(l + (r - l) / 2);

    // mid belongs to left
    sort(arr, l, m);
    sort(arr, m + 1, r);
    merge(arr, l, r, m);
}

function merge(arr: Array<number>, l: number, r: number, m: number) {
    // the mid belongs to left
    let iLength = m - l + 1;
    let jLength = r - m;

    // set the sub arrays
    let left = [];
    let right = [];

    for (let i = 0; i < iLength; i++) {
        left.push(arr[l + i]);
    }

    for (let j = 0; j < jLength; j++) {
        right.push(arr[m + 1 + j]);
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < iLength && j < jLength) {
        arr[k++] = left[i] < right[j] ? left[i++] : right[j++];
    }

    while (i < iLength) {
        arr[k++] = left[i++];
    }

    while (j < jLength) {
        arr[k++] = right[j++];
    }
}

export default function merge_sort(arr: number[]): void {
    sort(arr, 0, arr.length - 1);
}
//
//
//
//
//
//
//
//
//
//
//
// function sort(arr: Array<number>, l: number, r: number) {
//     // base case
//
//     if (l >= r) return;
//
//     let m = Math.floor(l + (r - l) / 2);
//
//     sort(arr, l, m);
//     sort(arr, m + 1, r);
//     merge(arr, l, r, m);
// }
//
// function merge(arr: Array<number>, l: number, r: number, m: number) {
//     let i2 = m - l + 1;
//     let j2 = r - m;
//
//     let left = [];
//     let right = [];
//
//     for (let i = 0; i < i2; i++) {
//         left.push(arr[l + i]);
//     }
//
//     for (let j = 0; j < j2; j++) {
//         right.push(arr[m + 1 + j]);
//     }
//
//     let i = 0;
//     let j = 0;
//
//     let k = l;
//
//     while (i < i2 && j < j2) {
//         arr[k++] = left[i] < right[j] ? left[i++] : right[j++];
//     }
//
//     while (i < i2) {
//         arr[k++] = left[i++];
//     }
//
//     while (j < j2) {
//         arr[k++] = right[j++];
//     }
// }
//
// export default function merge_sort(arr: number[]): void {
//     sort(arr, 0, arr.length - 1);
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function sort(arr: Array<number>, l: number, r: number) {
//     if (l >= r) return;
//
//     let m = l + Math.floor((r - l) / 2);
//
//     sort(arr, l, m);
//     sort(arr, m + 1, r);
//     merge(arr, l, r, m);
// }
//
// function merge(arr: Array<number>, l: number, r: number, m: number) {
//     // find length of left and right
//
//     let i2 = m - l + 1;
//     let j2 = r - m;
//
//     // sub-arrays
//     let left = [];
//     let right = [];
//
//     // place ranges into sub arr
//     for (let i = 0; i < i2; i++) {
//         left[i] = arr[l + i];
//     }
//
//     for (let j = 0; j < j2; j++) {
//         right[j] = arr[m + 1 + j];
//     }
//
//     // now to combine
//
//     let i = 0;
//     let j = 0;
//     let k = l;
//
//     while (i < i2 && j < j2) {
//         arr[k++] = left[i] < right[j] ? left[i++] : right[j++];
//     }
//
//     while (i < i2) {
//         arr[k++] = left[i++];
//     }
//     while (j < j2) {
//         arr[k++] = right[j++];
//     }
// }
//
// export default function merge_sort(arr: number[]): void {
//     sort(arr, 0, arr.length - 1);
// }

// function merge(arr: Array<number>, l: number, r: number, m: number) {
//     let i2 = m - l + 1;
//     let j2 = r - m;
//
//     let left = [];
//     let right = [];
//
//     for (let i = 0; i < i2; i++) {
//         left[i] = arr[l + i];
//     }
//
//     for (let j = 0; j < j2; j++) {
//         right[j] = arr[m + 1 + j];
//     }
//
//     let i = 0;
//     let j = 0;
//     let k = l;
//
//     while (i < i2 && j < j2) {
//         arr[k++] = left[i] < right[j] ? left[i++] : right[j++];
//     }
//
//     while (i < i2) {
//         arr[k++] = left[i++];
//     }
//
//     while (j < j2) {
//         arr[k++] = right[j++];
//     }
// }
//
// function sort(arr: Array<number>, l: number, r: number) {
//     if (l >= r) return;
//     let m = l + Math.floor((r - l) / 2);
//
//     sort(arr, l, m);
//     sort(arr, m + 1, r);
//     merge(arr, l, r, m);
// }
//
// export default function merge_sort(arr: number[]): void {
//     sort(arr, 0, arr.length - 1);
// }
