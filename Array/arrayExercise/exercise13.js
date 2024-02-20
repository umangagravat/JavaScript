// 13. Write a JavaScript program to add items to a blank array and display them.

const arr = [];

function addItems() {
    const input = document.querySelector('#input');
    const value = input.value;
    arr.push(value);
    input.value = '';
    console.log(arr);
}

function displayItems() {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Element ${i} = ${arr[i]}`);
    }
}