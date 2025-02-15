import React from 'react'

export function quickSort(array) {
    let steps = [];

    function partition(arr, low, high) {
        let pivot = arr[high]; // Choosing the last element as pivot
        let i = low - 1;

        for (let j = low; j < high; j++) {
            // Record the comparison
            steps.push({
                action: "comparison",
                left: j,
                right: high,
                pivot: high,
                array: [...arr]
            });

            if (arr[j] < pivot) {
                i++;
                if (i !== j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    steps.push({
                        action: "swap",
                        left: i,
                        right: j,
                        pivot: high,
                        array: [...arr]
                    });
                }
            }
        }
        
        // Swap the pivot into place
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        steps.push({
            action: "swap",
            left: i + 1,
            right: high,
            pivot: high,
            array: [...arr]
        });

        return i + 1;
    }

    function quicksortHelper(arr, low, high) {
        if (low < high) {
            let pi = partition(arr, low, high);

            steps.push({
                action: "partition",
                pivot: pi,
                array: [...arr]
            });

            quicksortHelper(arr, low, pi - 1);
            quicksortHelper(arr, pi + 1, high);
        }
    }

    quicksortHelper(array, 0, array.length - 1);
    return steps;
}