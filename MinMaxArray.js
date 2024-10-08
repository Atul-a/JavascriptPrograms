function findMinMax( arr ){
    if(arr.length ==0 ){
        return { max:null, min:null }
     }

     let max = arr[0];
     let min = arr[0];
     
     for ( let i = 1; i < arr.length; i++ ){
        if( arr[i] > max ){
            max = arr[i];
        }
        if( arr[i] < min){
            min = arr[i]
        }
     }
     return { max, min};
}
const arr = [1,2,3,4,5,6,7];
const result = findMinMax(arr);
console.log(result);