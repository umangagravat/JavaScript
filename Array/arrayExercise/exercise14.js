// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

function remove(element) {

    var rem = element.reduce(function (acc, curr) {
        if (!acc.includes(curr)) {
            acc.push(curr);
        }
        return acc;
    }, []);
    return rem;
}

console.log(remove([10, 20, 30, 20, 20, 40, 50, 50, 30]));

