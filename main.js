const searchForm = document.querySelector(".search-bar"); //form
const enterTodo = document.getElementById("todo__user-input");
const todoList = document.getElementById("render__todo-list");
let checked = import('./assets/images/universalImages/icon-check.svg')

let todos = [];

//capture todos - get the value from the user input and push it to the array todos
function addTodoItem() {
  let todo = enterTodo.value;
  todos = [...todos, todo];
}

function renderTodoItem() {
  let todoContainer = document.createElement("li");
  let labelContainer = document.createElement("div");
  let uncheckedElement = document.createElement("div")
  let todoText = document.createElement("label");

  //add classlist
  labelContainer.classList.add('h-[2.4rem]', 'w-[2.4rem]', 'labelContainer', 'bg-transparent', 'rounded-full', 'cursor-pointer')
  uncheckedElement.classList.add('h-[2.4rem]', 'w-[2.4rem]', 'border', 'border-black', 'rounded-full')

  todoText.textContent = todos[todos.length-1];

  labelContainer.appendChild(uncheckedElement);
  todoContainer.appendChild(labelContainer);
  todoContainer.appendChild(todoText);
  todoList.appendChild(todoContainer);

  checkUncheck(labelContainer, uncheckedElement);
}

function checkUncheck(labelContainer, uncheckedElement) {
  let checkedImgage = document.createElement("img");
  checkedImgage.src = checked; 
  console.log(checkedImgage)
  labelContainer.addEventListener('click',(e)=>{
    e.preventDefault();
    labelContainer.removeChild(uncheckedElement)
    labelContainer.appendChild(checkedImgage);
  })
}


searchForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    addTodoItem();
    renderTodoItem();
    console.log(todos);
})
