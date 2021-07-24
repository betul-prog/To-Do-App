const addItem = document.getElementById("additem");
const addBtn = document.getElementById("add-btn");
let todoList = document.getElementById("todolist");
let el = document.getElementsByTagName("li");

// const checkBtn = document.getElementsByClassName("check-btn");
// const deleteBtn = document.getElementsByClassName("delete-btn");
// const tik = document.getElementsByClassName("tik");

let text = addItem.value;

addBtn.addEventListener("click", () =>{
        let li = document.createElement("li");
        li.textContent = text;
        todoList.insertBefore(li, todoList.childNodes[0]);
        todoList.append(li);
});