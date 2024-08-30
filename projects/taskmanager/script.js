const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todolist');

let editToDo = null;

// Function to add to do 
const addTodo = () => {
    const inputText = inputBox.value.trim();;
    if (inputText.length <= 0) {
        alert("you must write something to do");
        return;
    }
    if (addBtn.value === "Edit") {
        editlocalToDos(editToDo.target.previousElementSibling.innerHTML);
        editToDo.target.previousElementSibling.innerHTML = inputText;
        // editlocalToDos(inputText);

        addBtn.value = "Add";
        inputBox.value = "";
    }
    else {



        //creating a pag

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        // creating edit button 

        const editbtn = document.createElement("button");
        editbtn.innerText = "Edit";
        editbtn.classList.add("btn", "editBtn");
        li.appendChild(editbtn);
        // creating remove button 

        const deletebtn = document.createElement("button");
        deletebtn.innerText = "Remove";
        deletebtn.classList.add("btn", "dltbtn");
        li.appendChild(deletebtn);


        todoList.appendChild(li);
        inputBox.value = "";

        saveLocalToDos(inputText);
    }
}
//  Function to update To Do
const updateToDo = (e) => {
    // console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
        deletelocalToDos(e.target.parentElement);
    }
    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editToDo = e;

    }

}
//  Function to save local To Do
const saveLocalToDos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }

    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }


    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));


}
//  Function to get local To Do

const getLocalToDos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }

    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todo => {
        //creating a pag

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = todo;
        li.appendChild(p);

        // creating edit button 

        const editbtn = document.createElement("button");
        editbtn.innerText = "Edit";
        editbtn.classList.add("btn", "editBtn");
        li.appendChild(editbtn);
        // creating remove button 

        const deletebtn = document.createElement("button");
        deletebtn.innerText = "Remove";
        deletebtn.classList.add("btn", "dltbtn");
        li.appendChild(deletebtn);


        todoList.appendChild(li);
    });
}
//  Function to delete local To Do
const deletelocalToDos=(todo)=>{
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }

    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    let todoText = todo.children[0].innerHTML;
    let todoIndex =todos.indexOf(todoText);
    todos.splice(todoIndex,1);
    localStorage.setItem("todos",JSON.stringify(todos));
    console.log(todoIndex);


}

const editlocalToDos = (todo) => {
   let todos = JSON.parse(localStorage.getItem("todos"));
   let todoIndex = todos.indexOf(todo);
   todos[todoIndex] = inputBox.value;
   localStorage.setItem("todos",JSON.stringify(todos)); 
    
}
document.addEventListener('DOMContentLoaded',getLocalToDos);
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateToDo);