// divide and conquer
// quick sort is recursive and is memory efficient
//
// we pick a pivot point (index) in the array
// iterate through the whole array and place items that are smaller than pivot value to front
// and then after the iteration we place the pivot number at the end
//
// using the pivot as a splitter, we split the array into 2, and recurse on the subarrays (not inclusive of previous pivot)
//
// [7, 8, 6, 3, 4, 5] -- original array, we pick high index as pivot -- which is 5
// [7, 8, 6, 3, 4, 5] -- 7 is larger, do nothing
// [7, 8, 6, 3, 4, 5] -- 8 & 6 are larger, do nothing
// [7, 8, 6, 3, 4, 5] -- 3 is smaller, so lets swap with i-0
// [3, 8, 6, 7, 4, 5] -- 4 is smaller, so lets swap with i-1, & there is no more el left
// [3, 4, 6, 7, 8, 5] -- now we need to move pivot to after last moved ie i-2
// [3, 4, 5, 7, 8, 6] --- now we can recurse again
// ---- end of first iteration
// [3,4] [5] [7,8,6]
// [3] [4] [5] [6] [7, 8]
// [3] [4] [5] [6] [7] [8]

//
// split array into subarrays

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

// PLAYGROUND
//

// function qs(arr, lo, hi) {
//   // end func if overlap has happened
//   if (lo >= hi) {
//     return;
//   }
//
//   const pivotIndex = partition(arr, lo, hi);
//
//   qs(arr, lo, pivotIndex - 1);
//   qs(arr, pivotIndex + 1, hi);
//
// }
//
// function partition(arr, lo, hi) {
//   // take the hi el and make it pivot
//   const pivot = arr[hi]
//
//   // set the pointer to be beyond lo el which is lo -1
//   let pointer = lo-1;
//
//   // loop through the sub array
//   for (let i = lo; i<hi; ++i) {
//     // increment pointer
//     // do swapping if el is indeed lower or equals to pivot
//     if (arr[i]<=pivot) {
//       pointer++;
//       const temp = arr[i];
//       arr[i] = arr[pointer];
//       arr[pointer] = temp;
//     }
//   }
// }
//
// function run(arr) {
//   qs(arr, 0, arr.length-1);
//   return arr;
// }
//
// const input = [7, 8, 6, 3, 4, 5];
//
// console.log(run(input))
