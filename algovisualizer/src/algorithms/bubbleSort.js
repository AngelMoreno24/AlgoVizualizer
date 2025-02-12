export function bubbleSort(array) {
 

    let steps = []

    let end = array.length-1;

    let start = 0;

    let sorted = false;

    console.log("before")
    while(start < end && !sorted){

        console.log("start")
        sorted = true;
        for(let i = 0; i < end; i++){

            steps.push(
                {
                    action: "comparison",
                    left: i, 
                    right: i+1,
                    array: [...array]
                }
            )
            console.log(array)

            if(array[i] > array[i+1]){
                let temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
                sorted=false;

                console.log(`swapped ${array[i]} and ${array[i+1]}`)
                
            steps.push(
                {
                    action: "swap",
                    left: i, 
                    right: i+1,
                    array: array

                }
            )
            }
        }
        end--;
    }
console.log(steps)


    return steps;
  
}
   