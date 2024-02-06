// * * * * * * * * *
//   * * * * * * *
//    * * * * *
//      * * *
//        *

const n=5;

for(let i=1; i<=n; i++){
   // const cols = n + n - i;
    for(let j=1; j<= n + n - i; j++){
        const value = (j <= i-1 ) ? 'o ' : '* ';
                document.write(value);
    }
    document.write("<br />")
}