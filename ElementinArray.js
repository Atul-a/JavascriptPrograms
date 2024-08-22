function findElement( arr, target ){
    for( let i = 0; i < arr.length; i++){
        if( arr[i] == target){
            return i;
        }
       }
       return -1;
}
const arr = [1,2,3,4,5,6];
const target = 2;
const result = findElement( arr, target );


if(result !== -1 ){
    console.log("Element  found");
}
else{
    console.log("Element not found");
}