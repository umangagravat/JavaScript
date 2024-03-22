// 33. Write a JavaScript function to remove non-word characters.
// Test Data :
// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
// "PHP - MySQL"


function remove(str) {
    return str.replace(/[^A-Za-z 0-9 -]/g, '');
};
console.log(remove('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));