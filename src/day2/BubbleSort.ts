export default function bubble_sort(arr: number[]): void {
    // dont forget the optimisations, after each loop, last item is surely sorted.
    for (let i = 0; i < arr.length - 1; ++i) {
        let count = 0;
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                count++;
            }
        }
        if (count === 0) break;
    }
}
