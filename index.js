
var addTodo = event =>{
    event.preventDefault();
    let item = document.createElement("li");
    item.addEventListener("click", completeTodo);
    item.innerText = document.getElementById("item").value;
    
    let button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener("click", removeTodo);
    item.append(button);

    let list = document.querySelector("ul");
    list.appendChild(item);
}
document.querySelector("form").addEventListener("submit", addTodo);


var removeTodo = event => {
    event.target.parentNode.remove();
}

var completeTodo = event => {
    let aria = event.target.getAttribute("aria-checked");
    if (aria !== "true"){
        event.target.setAttribute("aria-checked", "true");
    }
    else{
        event.target.setAttribute("aria-checked", "false");
    }
}