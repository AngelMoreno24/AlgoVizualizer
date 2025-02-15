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
                left: i,
                right: j,
                pivot: high,
                array: [...arr]
            });

            if (arr[j] < pivot) {
                i++;
                steps.push({
                    action: "increment i",
                    left: i,
                    right: j,
                    pivot: high,
                    array: [...arr]
                });
                if (i !== j) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    steps.push({
                        action: "swap1",
                        left: i,
                        right: j,
                        pivot: high,
                        array: [...arr]
                    });
                }
            }
        }
        
        steps.push({
            action: "increment for pivot swap",
            pivotSwap: i + 1,
            pivot: high,
            array: [...arr]
        });
        // Swap the pivot into place
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        steps.push({
            action: "swap pivot",
            left: i + 1,
            pivotSwap: high,
            right: high,
            pivot: i + 1,
            array: [...arr]
        });

        return i + 1;
    }

    function quicksortHelper(arr, low, high) {
        if (low < high) {
            let pi = partition(arr, low, high);

            // Log pivot placement
            steps.push({
                action: "pivot",
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