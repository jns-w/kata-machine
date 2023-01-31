export default function bubble_sort(arr: number[]): void {
    let didSwap = false;

    for (let i = 0; i < arr.length; i++) {
        didSwap = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                swap(arr, j, j + 1);
                didSwap = true;
            }
        }
        if (!didSwap) break;
    }

    function swap(array: Array<number>, index1: number, index2: number) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
}
