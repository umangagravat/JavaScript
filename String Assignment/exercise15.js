// 15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"

function checkNumber(number){
    const lastNumber = String(number).slice(-1);
    function prefix(){
        switch(lastNumber){
            case '1': {
                return 'st';
            }
            case '2' :{
                return 'nd';
            }
            case '3' : {
                return 'rd';
            }
            default : {
                return 'th';
            }
        }
    }
    return String(number) + prefix();
}
console.log(checkNumber('1'));
console.log(checkNumber('479'));
console.log(checkNumber('33'));
console.log(checkNumber('100'));