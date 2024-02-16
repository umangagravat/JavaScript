function fun_addRow() {
    const mainContainerObj = document.getElementById('main-container');
    const children = mainContainerObj.children;
    const firstChild = children[0].localName;

    if(children.length === 1 && firstChild === 'span') {
        children[0].remove();
    }

    // create div
    const div = document.createElement('div');
    div.style = 'padding: 1rem; margin: 1rem; border: 1px solid blue; border-radius: 10px;';
    
    // create button
    const button = document.createElement('button');
    button.style = 'padding: 4px;';
    button.setAttribute('type', 'button');
    button.setAttribute('onclick', 'fun_removeMe(this)');
    button.innerHTML = 'Remove';

    div.append(button);

    // append to main container
    mainContainerObj.append(div);

    fun_manageCounter('plus');
}

function fun_removeMe(obj) {
    const parent = obj.parentElement;
    parent.remove();
    fun_manageCounter('minus');
}

function fun_manageCounter(operation) {
    const divCounter = document.getElementById('counter');
    let counter = +divCounter.innerHTML;
    divCounter.innerHTML = operation === 'plus' ? ++counter : --counter;

    if(operation === 'minus' && counter === 0) {
        const span = document.createElement('span');
        span.innerText = 'No Box Inside';
        document.getElementById('main-container').append(span);
    }
}