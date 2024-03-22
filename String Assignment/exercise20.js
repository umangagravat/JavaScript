// 20. Write a JavaScript function that can pad (left, right) a string to get to a specific length.
// Test Data :
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"

function padString(pad,str,position){
    if(typeof(str) === 'undefined'){ 
        return pad;
    }
    if(position == ''){
        return(pad + str).slice(-pad.length);
    }
    else{
        return(str + pad).substring(0, pad.length);
    }
}
console.log(padString('0000',123,'l'));
console.log(padString('00000000',123,''));