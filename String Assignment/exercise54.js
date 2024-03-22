// 54. Write a JavaScript function to check a given string is in Kebab case or not.
// Kebab case: "the-quick-brown-fox-jumps-over-the-lazy-dog"
// Similar to snake case, above, except hyphens rather than underscores are used to replace spaces. It is also known as spinal case, param case, Lisp case in reference to the Lisp programming language, or dash case (or illustratively as kebab-case)
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
    const pattern = /(\w+)-(\w)([\w-]*)/
    return pattern.test(text) && !text.includes('_')
  }
  console.log(test('j'))
  console.log(test('Java-Exercises'))
  console.log(test('JavaScript-Exercises'))
  console.log(test('JavaScript_Exercises'))
  console.log(test(12356))