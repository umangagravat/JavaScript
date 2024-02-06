//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

const n = 5;
let max = 0;

for(let i = 1; i <= n*2; i++) {
    let cols = 0;
    if( i <= n ) {
        cols = n + i - 1;
        max = cols;
    } else {
        cols = max;
        max--;
    }

    for(let j=1; j<=cols; j++) {
        let value = "";
        if(i <= n ) {
            value = (j <= n-i) ? '^' : '*';
        } else {
            value = (j <= i-n-1) ? '^' : '*';
        }
        document.write(value);
    }
    document.write('<br />');
}


// const n = 4
// for (let i = 1; i <= n*2; i++) {
//     if (i <= n) {
//         for (let j = 1; j <= n + i - 1; j++) {
//             const value = (j <= n - i) ? 'o ' : '* ';
//             document.write(value);
//         }
//         document.write("<br />")
//     }
//     else {
//         const cols = n*2 - i + n;
//         for (let j = 1; j <=cols; j++) {
//             const value = (j <= i - n - 1) ? 'o ' : '* ';
//             document.write(value);
//         }
//         document.write("<br />")
//     }
// }