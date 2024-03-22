// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

function merge_array(arr1,arr2){
    const concat = arr1.concat(arr2);
    
    const merges = concat.reduce((acc,ele) => {
        if(!acc.includes(ele)){
            acc.push(ele);
        }
        return acc;
    }, [])
    return merges;
}

console.log(merge_array([1, 2, 3], [2, 30, 1]));