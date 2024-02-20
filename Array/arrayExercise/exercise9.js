// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 
// 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swaps(args){
    const divide = args.split('');
    return divide.map((args,index,Array) => (args === args.toUpperCase()) ? args.toLowerCase() : args.toUpperCase()).join('');

}
console.log(swaps('The Quick Brown Fox'));