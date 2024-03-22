// 56. Write a JavaScript function to check whether a string is in Pascal case or not.
// A PascalCase naming convention capitalizes the first letter of each compound word in a variable. It is a best practice in software development to use descriptive variable names.
// Test Data :
// ("XmlStream") -> true
// ("IOStream") -> true
// ("javascript") -> false
// (12356) -> "It must be a string."

const test = (word) => {
    if (typeof word !== 'string')
    {
      return 'It must be a string.'
    }
    const pattern = /^[A-Z][A-Za-z]*$/
    return pattern.test(word)
  }
  console.log(test("XmlStream"))
  console.log(test("IOStream"))
  console.log(test("IEnumerable"))
  console.log(test("javascript"))
  console.log(test(12356))