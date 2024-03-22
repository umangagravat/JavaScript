// 53. Write a JavaScript function to check a given string is in Flat case or not.
// Flat case: As the name implies, flatcase refers to the use of lowercase letters, with no spaces between words.
// Test Data :
// ('j') -> true
// ('java exercises') -> false
// ('JavaScriptExercises') -> false
// ('javascriptexercises') -> true
// (12356) -> "It must be a string."

const test = (text) => {
    if (typeof text !== 'string') {
        return 'It must be a string.'
    }
    const pattern = /^[a-z]*$/
    return pattern.test(text)
}
console.log(test('j'))
console.log(test('java exercises'))
console.log(test('JavaScriptExercises'))
console.log(test('javascriptexercises'))
console.log(test(12356))
