export default function bs_list(haystack: number[], needle: number): boolean {

  let low = 0;
  let high = haystack.length;

  while (low < high) {
    let mid = Math.floor((low + (high-low)/2));
    let val = haystack[mid];

    if (needle === val) return true;

    if (needle < val) {
      high = mid;
    } else if (needle > val) {
      low = mid+1;
    }
  }
  return false;
}


// const bs_list = (haystack, needle) => {
//
//   let low = 0;
//   let high = haystack.length;
//
//   while (low < high) {
//     let mid = Math.floor((low + (high-low)/2));
//     let val = haystack[mid];
//
//     if (needle === val) return true;
//
//     if (needle < val) {
//       high = mid;
//     } else if (needle > val) {
//       low = mid+1;
//     }
//   }
//   return false;
// }

// const binarySearch = (haystack, needle, low, high) => {
//
//   let mid = Math.floor(low + (high - low) / 2);
//   let val = haystack[mid];
//
//   if (low > high) return -1;
//
//   if (needle === val) return mid;
//
//   if (needle < val) {
//     return binarySearch(haystack, needle, low, mid-1); 
//   } else if (needle > val) {
//     return binarySearch(haystack, needle, mid+1, high);
//   }
// }
//
//
// const arr = [0,2,3,10,15,20,23,30]
//
// const needle = 0
//
// console.log(bs_list(arr, needle))

// console.log(binarySearch(arr, needle, 0, arr.length))
