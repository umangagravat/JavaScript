
const n2 = 8;
for(let i = 1; i <= n2; i++) {
    for(let j = 1; j <= n2; j++) {
        if( (j==1&& i!=1 ) ||
            (j==n2 && i!= 1) ||
            (i==1 && j!=1 && j!=n2) ||
            (i==n2/2)
            )
         {
            document.write('* ');
        } else {
            document.write(`<span class="blue">* </span>`);
        }
    }
    document.write('<br/>');
}
 