// 25. Write a JavaScript function to sort the following array of objects by title value.


const library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];
function sortMEthod(arr) {
    const title = arr.sort((char1, char2, index, array) => (char1.title.localeCompare(char2.title)));
    return title;
}
console.log(sortMEthod(library));
