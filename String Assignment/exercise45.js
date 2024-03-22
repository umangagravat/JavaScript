// 45. Write a JavaScript function to get a humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.
// Test Data :
// console.log(humanize(1));
// console.log(humanize(20));
// console.log(humanize(302));
// "1st"
// "20th"
// "302nd"

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
console.log(checkNumber('20'));
console.log(checkNumber('302'));
console.log(checkNumber('100'));