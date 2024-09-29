let input = document.getElementById("input");
let ul = document.getElementById("list");

function addList() {
    let listitem  = document.createElement("li");
    listitem.innerHTML += input.value + ' <button onclick="removeList(event)">Remove</button>';
    ul.append(listitem);
    input.value = ' ';
}

function removeList(event){

    let listitem = event.parentElement;
    listitem.remove();
}
  