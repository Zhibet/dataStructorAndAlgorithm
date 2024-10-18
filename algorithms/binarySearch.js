function binarySearch(arr,val){
    let start = 0;
    let end = arr.length - 1;
    let middle;
    while(start <= end){
        middle = Math.floor((start + end) / 2);
        if(val === arr[middle]){
            return arr[middle]
        }else if(val < arr[middle]){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
    }
    return -1;
}

console.log(binarySearch([10,45,55,67,77,100],100))