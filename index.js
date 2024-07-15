const todoForm = document.querySelector(".todo-form");
const todoInput = document.getElementById("todo__user-input");
const displayTodoSection = document.getElementById("todo-container");

let todoData = [];
let currentTodoData = {};


function capatitalizeFirstLetter(input) {
    if (input.value.length > 0) {
        input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    }
}

function addOrUpdateTodos() {
    const todoObj = {
        id: `${todoInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        todo: todoInput.value,
        isChecked: false,
    };
    
    todoData.unshift(todoObj);
    updateDisplay();
}


function updateDisplay() {
    displayTodoSection.innerHTML = "";
    todoData.forEach((item) => {
        displayTodoSection.innerHTML += `
        <li class='todo-item w-[100%] h-[6.4rem] border border-b-custom-light-grey-0 border-t-0 border-l-0 border-r-0 bg-transparent flex gap-[2.4rem] items-center text-[1.8rem]' id="${item.id}">
        <button 
        class="w-[2.4rem] h-[2.4rem]  border border-custom-light-grey-0 rounded-full ml-[2.4rem]"
        onclick="checkUncheckTodo(this)" >
        </button>
        <p>${item.todo}</p>
        </li>`;
    });
}

function checkUncheckTodo(todoButton) {
  const todoArrayIndex = todoData.findIndex(
    (item) => item.id === todoButton.parentElement.id
  );
  todoData[todoArrayIndex].isChecked = !todoData[todoArrayIndex].isChecked;
  console.log(todoArrayIndex)(!todoData[todoArrayIndex].isChecked)
    ? todoButton.classList.add("bg-black")
    : todoButton.classList.remove("bg-black");
  console.log(todoData[todoArrayIndex]);
}

todoInput.addEventListener("input", function () {
  capatitalizeFirstLetter(this);
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTodos();
  todoInput.value = "";
});
