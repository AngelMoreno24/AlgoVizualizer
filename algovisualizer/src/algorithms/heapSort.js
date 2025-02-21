export function heapSort(arr){

    let steps = []

    function heapify(arr, n, i) {

        // Initialize largest as root
        let largest = i;
        
        // left index = 2*i + 1
        let l = 2 * i + 1; 
        
        // right index = 2*i + 2
        let r = 2 * i + 2; 
    
        // If left child is larger than root
        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }
    
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }
    
        
        steps.push({
            action: "compare 1",
            left: i,
            right: largest,
            pivot: r,
            array: [...arr]
        });
        
        // If largest is not root
        if (largest !== i) {

            steps.push({
                action: "before swap",
                left: i,
                right: largest,
                pivot: r,
                array: [...arr]
            });

            let temp = arr[i]; // Swap
            arr[i] = arr[largest];
            arr[largest] = temp;

            steps.push({
                action: "after swap",
                left: i,
                right: largest,
                pivot: r,
                array: [...arr]
            });
    
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    }
    
    // Main function to do heap sort
    function heapSort1(arr) {
        let n = arr.length;
    
        // Build heap (rearrange array)
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            
            steps.push({
                action: "build heap",
                left: 0,
                right: i,
                pivot: n-1,
                array: [...arr]
            });
            heapify(arr, n, i);
        }
    
        // One by one extract an element from heap
        for (let i = n - 1; i > 0; i--) {
        
            // Move current root to end
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            steps.push({
                action: "before heapify",
                left: 0,
                pivot: i,
                array: [...arr]
            });
            // Call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }

    heapSort1(arr);

    return steps;
}