function sortSelection(arr, n){
    for(let i=0;i<n-1;i++){
        let min = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min= j;
            }
        }
        if(min!== i){
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
        }
    }  
    console.log(arr);
}
let arr = [2,3,4,1,6,-3,-5,9];
sortSelection(arr, arr.length);




console.log("\n SElection sort using reccursion :-")

function sortSelectRecc(arr, start=0){
    let min = start;
    if(start>=arr.length-1){
        console.log(arr);
        return;
    }
    for(let i=min+1;i<arr.length;i++){
        if(arr[i]<arr[min]){
            min = i;
        }
    }
    if(min!==minIndex){
        let temp = arr[min];
        arr[min] = arr[start];
        arr[start]= temp;
    }
    sortSelectRecc(arr,start+1);

}


sortSelectRecc(arr,0);
