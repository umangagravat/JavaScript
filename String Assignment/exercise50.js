// 50. Write a JavaScript program to check if a given string contains alphanumeric characters that are palindromes regardless of special characters and letter case.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama". The 19-letter Finnish word saippuakivikauppias (a soapstone vendor), is the longest single-word palindrome in everyday use, while the 12-letter term tattarrattat (from James Joyce in Ulysses) is the longest in English.
// Test Data :
// ('$22_|1372^2731|_22') -> true
// ('12%^&2') -> false
// ('234%$$%432') -> true
// (1234) -> "It must be string"
// ('aba%$aba') -> true
// ('Aba%$aba') -> true


const test = (text) => {
    if (typeof text !== 'string') {
        return 'It must be string'
    }

    const new_text = text.replace(/[^a-z0-9]+/ig, '').toLowerCase()
    if (new_text.charAt(0) == new_text.charAt(new_text.length - 1)) {
        return true
    } else {
        return false;
    }
}

console.log(test('$22_|1372^2731|_22'))
console.log(test('12%^&2'))
console.log(test('234%$$%432'))
console.log(test(1234))
console.log(test('aba%$aba'))
console.log(test('Aba%$aba'))
