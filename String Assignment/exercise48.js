// Write a JavaScript function to get the successor to a string.

function successor(str){
    var last = str.charCodeAt(str.length-1) + 1;
    var res = String.fromCharCode(last);
    var str = str.substring(0, str.length -1);
    return str + res;
    };
    console.log(successor('abce'));
    console.log(successor('3585'));