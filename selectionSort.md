selection sort:- 

selects an element as smallest number and checks in the rest of the array for smaller value. 
if finds an element smaller that the selected makes its index as minimum and replaces the swaps the value with the fisrt one. 
this process repeats for lenth -1 times. bcz for the ninner loop for checking smmaler values index we starts from the selected values next index.
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



selection sort using reccursion:-

function sortSelectRecc(arr, start=0){   //here this function takes two inputs array and its starting value.
    let min = start;        //assigns starting value to the new variable min.
    if(start>=arr.length-1){ //checks whether the index out of bound
        console.log(arr); //if array ends then prints the array
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
    sortSelectRecc(arr,start+1); //calls the same function inside it with new starting index and partially sorted array

}


sortSelectRecc(arr,0);




here, in selection sort using reccursion, we calls the same function repeatedly with passing array and its starting value.

when this function invokes with an array and starting value, it makes value at the starting as the minimum value. then from the next index to last index it searches 
any value which is smaller than this selected value exist. if value exist smaller than the selected value, then selects this values index as smaller values index. 
then swaps with the firstly selected value. and calls the function with the partially sorted array and next index value.
