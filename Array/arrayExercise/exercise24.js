// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

array = [NaN, 0, 15, false, -22, '', undefined, 47, null,];

const remove = array.filter((element, index, array) => {
    if (typeof (element) !== 'null' && !element == 0 && typeof (element) !== 'undefined' && typeof (element) == 'boolean' && typeof (element) !== 'NaN') {
        return element;
    } else {
        return element;
    }
})

console.log(remove);



