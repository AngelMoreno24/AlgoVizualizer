function mergeSort(array) {
    let steps = [];

    // Merge function to combine two sorted arrays
    function merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;

        // Compare each element and push the smaller one to the result
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                steps.push({
                    action: "pushed",
                    left: i + 1,
                    pivotSwap: high,
                    right: high,
                    pivot: i + 1,
                    array: [...arr]
                });
                i += 1;
            } else {
                result.push(right[j]);
                j += 1;
            }
        }

        // If there are leftover elements in either array, add them to the result
        result = result.concat(left.slice(i), right.slice(j));

        return result;
    }

    // Recursive mergeSort function
    function mergeSortRecursive(array, low, high) {
        if (low >= high) {
            return [array[low]]; // Base case: single element, return as an array
        }

        let mid = Math.floor((low + high) / 2);
        let left = mergeSortRecursive(array, low, mid);
        let right = mergeSortRecursive(array, mid + 1, high);

        return merge(left, right);
    }

    // Start the sorting process
    
    mergeSortRecursive(array, 0, array.length - 1); 

    return steps; // Return the sorted array
}