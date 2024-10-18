function linearSearch(arr,value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == value){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1,22,360,44,55,67,789,45],67))