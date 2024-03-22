// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

function union(arr1,arr2){
    const concat = arr1.concat(arr2);
    
    const unions = concat.reduce((acc,ele) => {
        if(!acc.includes(ele)){
            acc.push(ele);
        }
        return acc;
    }, [])
    return unions;
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));