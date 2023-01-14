const swap = (arr: Array<number>, i: number, j: number): void => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const partition = (arr: Array<number>, low: number, high: number): number => {
    const pivotVal = arr[high];
    let ptr = low - 1;
    for (let i = low; i < high; i++) {
        if (arr[i] <= pivotVal) {
            ptr++;
            swap(arr, ptr, i);
        }
    }
    ptr++;
    swap(arr, ptr, high);
    return ptr; // this is for next recursion pivot
};

const qs = (arr: Array<number>, low: number, high: number): void => {
    // break case
    if (low >= high) return;

    const pivot = partition(arr, low, high);

    qs(arr, low, pivot - 1);
    qs(arr, pivot + 1, high);
};

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
