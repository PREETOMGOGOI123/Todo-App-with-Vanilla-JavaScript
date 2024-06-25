const searchForm = document.querySelector(".search-bar"); //form
const enterTodo = document.getElementById("todo__user-input");
const todoList = document.getElementById("render__todo-list");

let todos = [];

//capture todos - get the value from the user input and push it to the array todos
function captureTodos() {
  let todo = enterTodo.value.trim();
  if (!todo == "") {
    todos = [...todos, todo];
    createNewDOMElement();
    console.log(todos);
  }
}

function createNewDOMElement() {
  let todoItem = document.createElement("li");
  let customLabel = document.createElement("div");
  let todoValue = document.createElement("label");


  let currentTodoItem = todos[todos.length - 1];
  todoValue.textContent = currentTodoItem;
  todoItem.setAttribute("id", currentTodoItem);

  todoItem.classList.add( 'w-[100%]', 'flex', 'items-center', 'justify-start', 'relative', '[&:not(last-child)]border-b-2')
  customLabel.classList.add('h-[2.4rem]', 'w-[2.4rem]', 'border', 'border-black','ml-[2.4rem]', 'rounded-full')
  
  todoItem.appendChild(customLabel);
  todoItem.appendChild(todoValue);
  renderTodos(todoItem);
}

function renderTodos(todoItem) {
  todoList.appendChild(todoItem);
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  captureTodos();
});
