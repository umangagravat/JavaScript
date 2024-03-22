// 32. Write a JavaScript function to remove non-printable ASCII characters.
// Test Data :
// console.log(remove_non_ascii('???????PHP-MySQL??????'));
// "PHP-MySQL"

function remove_non_ascii(str) {
    return str.replace(/[^A-Z a-z 0-9 -]/g, '');
};
console.log(remove_non_ascii('???????PHP-MySQL??????'));