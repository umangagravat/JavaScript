// function greet (mesage) {
//     const output = `${mesage} Agravat`;
//     return output;
// }

// console.log(greet('hello'));

const n=7;
const center = Math.ceil(n / 2);  
for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
       if(i===center || j===center 
            || (j===1 && i<=center) 
            || (i===1 && j>=center) 
            || (i===n && j<=center) 
            || (j===n && i>=center)){
            document.write('* ')
        }
        else{
            document.write(`<span class="blue">* </span>`);
        }
    }
    document.write("<br />")
}


document.write("<br />");
const num=7; 
for(let i=1; i<=num; i++){
    for(let j=1; j<=num; j++){
       if(i===num || j===num || j===1 || i===1 ){
            document.write('* ')
        }
        else{
            document.write(`<span class="blue">* </span>`);
        }
    }
    document.write("<br />")
}


document.write("<br />");
const num2=7; 
for(let i=1; i<=num2; i++){
    for(let j=1; j<=num2; j++){
       if((i===num2 && j!=1 && j!=num2) || (j===num2 && i!=num2) || (j==1 && i!=num2)){
            document.write('* ')
        }
        else{
            document.write(`<span class="blue">* </span>`);
        }
    }
    document.write("<br />")
}

document.write("<br />");
const num3 =7
for(let i=1; i<=num3; i++){
    for(let j=1; j<=num3; j++){
       if(i==j || j+i===num3 +1){
            document.write('* ')
        }
        else{
            document.write(`<span class="blue">* </span>`);
        }
    }
    document.write("<br />")
}

