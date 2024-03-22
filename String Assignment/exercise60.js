// Write a JavaScript function to reverse words in a given string.
// Test Data:
// ("abc") -> "cba"
// ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
// (1234) -> "It must be a string."

function wordsReverser(string) {
    if (string.length === 0) {
        return 'String should not be empty!'
    }
    if (typeof string !== 'string') {
        return 'It must be a string.'
    }
    return string.split('').reverse().join('');
}
console.log(wordsReverser("abc"))
console.log(wordsReverser("JavaScript Exercises"))
console.log(wordsReverser(1234))