// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const sort = arr1.sort();

var max;
var maxFind = 0;
for (let i = 0; i < sort.length; i++) {
    for (let j = i; j < sort.length; j++) {
        if (sort[i] === sort[j]) {
            max++;
        }
        if (maxFind < max) {
            maxFind = max;
            items = sort[i];
        }
    }
    max = 0;
}
console.log(items + " (" + maxFind + " times)");

