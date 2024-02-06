//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *


const n=5;

for(let i=1; i<=n; i++){
    //const cols = n + i - 1;
    for(let j=1; j<= n + i - 1; j++){
        const value = (j <= n - i) ? 'o ' : '* ';
        document.write(value);
    }
    document.write("<br />")
}