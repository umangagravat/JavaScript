// 35. Write a JavaScript function to get random items from an array.


function random(element) {
    return element[(Math.random() * element.length)];
}
console.log(random([102, 321, 190, 100, 202, 800, 700, 202]));