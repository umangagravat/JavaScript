
const n= 5;
let b = 2;
for (let i =1; i<= n; i++){
   for ( let j=1; j<=i; j++){
      document.write(` ${b-i} `);
      b++;
   }
   document.write('<br/>');
}