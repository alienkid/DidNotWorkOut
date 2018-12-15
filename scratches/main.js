function newElement() {
    var input_val = document.getElementById('toDoEl').value,
        someThingToDo = document.createTextNode(input_val),
        listElem = document.createElement('li');

    listElem.appendChild(someThingToDo);

    if(input_val == "") {
        alert("Сначала введите название дела!");
    } else {
        document.getElementById('list').appendChild(listElem);
    }
    document.getElementById('toDoEl').value = "";

    var buttonDel = document.createElement("BUTTON"),
        delName = document.createTextNode("Удалить");

    buttonDel.className = "delete";
    buttonDel.appendChild(delName);
    listElem.appendChild(buttonDel);
}

var list = document.querySelector('ul');

list.addEventListener('click', function (evt) {
    if(evt.target.tagName === "LI") {
        evt.target.classList.toggle('done');
    } else if(evt.target.tagName === "BUTTON") {
        var errElem = evt.target.parentNode;
        errElem.remove();
    }
}, false);