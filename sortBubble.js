function bubleSort(arr){
    for(let j=0;j<arr.length;j++){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
}
    console.log(arr.join(' '));
}

bubleSort([7,6,-4,4,3,2,-1]);




//bubbleSort using reccursion

function bubbleSortRecc(arr,n){
 
    if(n==1){
        
        console.log(arr);
        return;
    }else{
        for(let i=0;i<n-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
            }
        }
        bubbleSortRecc(arr,n-1);
    }
}

let arr = [5,4,6,3,7,9,3,0,2,-1,-3];
 bubbleSortRecc(arr,arr.length);
