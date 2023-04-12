// function insertionSort(arr) {
//    for(i=1;i<arr.length;i++){
//     let key = arr[i];
//     let j=i-1;
//     while(j>=0 && arr[j]>key){
//       arr[j+1] = arr[j];
//       j= j-1;
//     }
//     arr[j+1] = key;
//    }
//    console.log(arr);
//   }
  
  // example usage
//   const unsortedArray = [5, 2, 4, 6, 1, 3];
// insertionSort(unsortedArray);



function insertionSortRecc(arr,index=1){
  if(index>=arr.length){
    console.log(arr);
    return;
  }
  let key = arr[index];
  let j=index-1;
  while(j>=0 && arr[j]>key){
    arr[j+1]=arr[j];
    j= j-1;
  }
  arr[j+1]=key;

  insertionSortRecc(arr,index+1);
}
const unsortedArray = [5, 2, 4, 6, 1, 3];
insertionSortRecc(unsortedArray);