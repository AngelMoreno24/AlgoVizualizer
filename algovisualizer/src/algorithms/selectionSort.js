export function selectionSort(arr) {
    let steps=[];

 
    for(let i=0;i<arr.length;i++){
        let minIndex = i;

        for(let j=1;j<arr.length;j++){

            steps.push({
                action: "comparison",
                left: i,
                right: j,
                pivot: minIndex,
                array: [...arr]
            });

            if(arr[i]<lowest){
                minIndex = j;
                
                steps.push({
                    action: "swap lowest index",
                    left: i,
                    right: j,
                    pivot: minIndex,
                    array: [...arr]
                });

            }
        } 

        if (minIndex !== i) {

            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            steps.push({
                action: "swap lowest",
                left: i,
                right: j,
                pivot: minIndex,
                array: [...arr]
            });
        }
    }
}