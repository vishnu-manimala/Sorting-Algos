# Sorting-Algos

Bubble Sort:-

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

here adjecent elements are compared and swaped according to the condition. if first element is larger than the secend then it swaps and smaller element comes to the left as it is a sorting in descending order. comparing adjecent elements loppes upto second last index of the array bcz we are  compare elements by accesing cuurent index and next index by adding 1 tyo the current index. if we  loop upto last index, algorith will goto the arr[n], that doent exist. its index out of bound. here in js the value in the arr[n] will be undefined. so we only wanted to travers upto the second last index.
 after n iteration aray will push largest element to the end. to complete the sorting we have to do this loop no of elements times. that why we added a for loop before the j loop.

Bubble sort using reccursion:-

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

Here, the function bubbleSortRecursive takes two arguments: the array arr to be sorted, and the length n of the array. The function first checks if n is equal to 1, which is the base case of the recursion. If n is 1, it simply returns the array since it is already sorted.

If n is greater than 1, the function uses a for loop to perform one pass of the bubble sort algorithm, swapping adjacent elements if they are in the wrong order. It then calls itself recursively with the array and n-1 as arguments, continuing to sort the array until the base case is reached.
