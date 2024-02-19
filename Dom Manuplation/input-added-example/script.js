function add() {

    const input = document.getElementById("text").value;
    if (input == "") {
        alert("please add items");
        return false
    }
    
    const ul = document.getElementById("ul-list");
    const li = document.createElement("li");
    li.innerHTML = text.value;
    document.getElementById("text").value = '';
    

    const button = document.createElement('button');
    button.setAttribute('id', "remove");
    button.setAttribute('onclick', 'remove(this)');
    button.innerText = 'Remove';
    li.appendChild(button);
    ul.appendChild(li);
}

function remove(obj) {
    const parent = obj.parentElement;
    parent.remove();
}
