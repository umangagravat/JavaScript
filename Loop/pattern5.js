//         *
//       * *
//     * * *
//   * * * *
// * * * * *
// * * * * *
//   * * * *
//     * * *
//       * *
//         *


const n = 5;
for (let i = 1; i <= n * 2; i++) {
    for (let j = 1; j <= n; j++) {
        if (i <= n) 
        {
            if (j <= (n - i)) 
            {
                document.write("o ")
            } 
            else 
            {
                document.write("* ")
            }
        } 
        else 
        {
            if (j <= i - (n + 1)) 
            {
                document.write("o ");
            } else {
                document.write("* ")
            }
        }       
    }
    document.write("<br />")
}