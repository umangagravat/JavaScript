// * * * * * * * * * *
// * * * * * * * * *
// * * * * * * * *
// * * * * * * *
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
// * * * * * * * * * *

const rows =10;

for(let i=1; i<=rows*2; i++){
   const col = (i<=rows)? rows-i+1 : i-rows;
    for(let j=1; j<=col; j++){
        document.write("* ")
    }
    document.write("<br />")
}
