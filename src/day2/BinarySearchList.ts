export default function bs_list(haystack: number[], needle: number): boolean {
  // if im not wrong, binary search is the one where we split in two?
  // there is a low and high, use that to find the mid

  let low = 0;
  let high = haystack.length;

  while (low < high) {
    let mid = Math.floor(low+(high-low)/2);

    let val = haystack[mid];

    if (needle === val) return true;

    if (needle < val) {
      high = mid;
    } else if (needle > val) {
      low = mid + 1;
    }
  }
  return false;
}
