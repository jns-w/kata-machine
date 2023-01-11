// Bubble sort works by iterating through the array and comparing i to i+1
// swapping if i+1 is smaller than i (assume ascending sort)

// export default function bubble_sort(arr: number[]): void {
//   for (let i = 0; i<arr.length-1; i++){
//     let didSwap = false;
//     for (let j = 0; j<arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j+1]) {
//         // swap
//         [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
//         didSwap = true;
//       }
//     }
//     if (!didSwap) break;
//   }
// }

// playground
function bubble_sort(arr) {
  for (let i = 0; i<arr.length-1; i++){
    let didSwap = false;
    for (let j = 0; j<arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        // swap
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
        didSwap = true;
      }
    }
    // if swap did not happen for the whole iteration -- assume that the array is sorted
    if (!didSwap) break;
  }
  return arr
}

const arr = [1,5,3,4,5,0]

console.log(bubble_sort(arr))
