export function insertionSort(array) {
    let steps=[];

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        
        steps.push({
            action: "comparison",
            left: i,
            right: j,
            array: [...arr]
        });
        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            steps.push({
                action: "swap",
                left: j,
                right: j + 1,
                array: [...arr]
            });
        }
        arr[j + 1] = key;
    }
    return steps
}