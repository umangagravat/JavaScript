// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

const filter_array_values = [58, '', 'abcd', true, null, false, 0];

const filters = filter_array_values.filter((arr) => {
    if(arr !== '' && typeof(arr) !== 'null' && arr !== 0 && arr !== false){
        return arr;
    }else{
        return arr;
    }
});

console.log(filters);
