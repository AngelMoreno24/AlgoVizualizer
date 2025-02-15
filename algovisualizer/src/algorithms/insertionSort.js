export function insertionSort(arr) {
    let steps=[];

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        
        steps.push({
            action: "comparison",
            left: j,
            pivot: i,
            array: [...arr]
        });
        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {

            steps.push({
                action: "prepare swap",
                left: j,
                pivot: j + 1,
                array: [...arr]
            });

            let temp = arr[j+1];
            arr[j + 1] = arr[j];
            arr[j] = temp;

            j = j - 1;

            steps.push({
                action: "swaped",
                left: j+2,
                pivot: j + 1,
                array: [...arr]
            });
        }
        arr[j + 1] = key; 
    }
    return steps
}