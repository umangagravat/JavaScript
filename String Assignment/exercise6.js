// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.

// Test Data:
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

console.log("6. Write a JavaScript function that hides email addresses to prevent unauthorized access.")
const protect_email = function(args){
    let emailsplit = args.split('_');
    return emailsplit[0]+"..."+emailsplit[1].slice(5);
}
console.log(protect_email("robin_sigh@example.com"));