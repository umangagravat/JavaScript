// 16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"

const truncate = function (str, length, end) {
    if (end == null) {
        end = "....";
    }
    if (str.length > length) {
        return str.substring(0, length - end.length) + end;
    } else {
        return str;
    }
}

console.log(truncate('We are doing JS string exercises.'));
console.log(truncate('We are doing JS string exercises.', 19));
console.log(truncate('We are doing JS string exercises.', 15, '!!'));