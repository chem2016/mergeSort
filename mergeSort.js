function mergeSort(arr){
    console.log(`top of merge sort: ${arr}`)     // 1,7, 5
    if(arr.length <= 1){
        return arr;
    }else{
        let middle = Math.floor(arr.length/2);         
        let arrLeft = mergeSort(arr.slice(0,middle));   // 1. ---   7,
        let arrRight = mergeSort(arr.slice(middle));    // 7,5 ->    5,
        console.log(`arrLeft: ${arrLeft}`)
        console.log(`arrRight: ${arrRight}`)
        return merge(arrLeft, arrRight);   //  7,5 -> 5, 7 -> 1, [5,7]
    }
    

}

const arr1 = [1, 7, 5, 19, 2, 7, 10];

function merge(arr1, arr2){
    let retArr = [];
    
    while(arr1.length && arr2.length){
        if(arr1[0]>=arr2[0]){
            retArr.push(arr2.shift())
        }else{
            retArr.push(arr1.shift())
        }
    }
    if(!arr1.length){
        retArr = retArr.concat(arr2);
    }
    else if(!arr2.length){
        retArr = retArr.concat(arr1);
    }
    console.log(`retArr: ${retArr}`)
    return retArr;
}


console.log(mergeSort(arr1));