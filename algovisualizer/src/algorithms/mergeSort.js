export function mergeSort(array) {
    let steps = [];
    let auxArray = [...array]; // Auxiliary array for modifications

    function merge(arr, left, mid, right) {
        let leftPart = arr.slice(left, mid + 1);
        let rightPart = arr.slice(mid + 1, right + 1);
        let i = 0, j = 0, k = left;

        while (i < leftPart.length && j < rightPart.length) {
            // Record the comparison
            steps.push({
                action: "comparison",
                left: left + i,
                right: mid + 1 + j,
                array: [...arr] // Capture the state of the entire array
            });

            if (leftPart[i] <= rightPart[j]) {
                arr[k] = leftPart[i];
                i++;
            } else {
                arr[k] = rightPart[j];
                j++;
            }
            k++;

            // Capture array after modification
            steps.push({
                action: "merge",
                leftIndex: left,
                rightIndex: right,
                array: [...arr] // Capture entire array after each merge step
            });
        }

        // Copy any remaining elements
        while (i < leftPart.length) {
            arr[k] = leftPart[i];
            i++;
            k++;
            steps.push({ action: "merge", leftIndex: left, rightIndex: right, array: [...arr] });
        }

        while (j < rightPart.length) {
            arr[k] = rightPart[j];
            j++;
            k++;
            steps.push({ action: "merge", leftIndex: left, rightIndex: right, array: [...arr] });
        }
    }

    function mergeSortHelper(arr, left, right) {
        if (left >= right) {
            return;
        }

        const mid = Math.floor((left + right) / 2);
        mergeSortHelper(arr, left, mid);
        mergeSortHelper(arr, mid + 1, right);
        merge(arr, left, mid, right);

        // Track the full array after each merge operation
        steps.push({
            action: "subarray_sorted",
            leftIndex: left,
            rightIndex: right,
            array: [...arr]
        });
    }

    mergeSortHelper(auxArray, 0, array.length - 1);

    // Final sorted array step
    steps.push({
        action: "sorted",
        array: [...auxArray]
    });

    return steps;
}