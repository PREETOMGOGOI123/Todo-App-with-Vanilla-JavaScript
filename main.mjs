import iconCheck from "./assets/images/universalImages/icon-check.svg";

const searchForm = document.querySelector(".search-bar"); // form
const enterTodo = document.getElementById("todo__user-input");
const todoList = document.getElementById("render__todo-list");

let todos = [];

// Capture todos - get the value from the user input and push it to the array todos
function addTodoItem() {
  let todo = enterTodo.value;
  todos = [...todos, todo];
}

function renderTodoItem() {
  let todoContainer = document.createElement("li");
  let label = document.createElement("div");
  let todoText = document.createElement("label");

  label.classList.add(
    "checkbox",
    "h-[2.4rem]",
    "w-[2.4rem]",
    "labelContainer",
    "rounded-full",
    "border",
    "border-[#E3E4F1]",
    "cursor-pointer",
    "flex",
    "justify-center",
    "items-center",
    "relative"
  );
  todoText.classList.add(
    "todo-text",
    "font-normal",
    "text-[#494C6B]",
    "tracking-[-0.25px]"
  );

  todoText.textContent = todos[todos.length - 1];

  todoContainer.appendChild(label);
  todoContainer.appendChild(todoText);
  todoList.appendChild(todoContainer);

  todoContainer.classList.add(
    "w-[100%]",
    "flex",
    "justify-left",
    "items-center",
    "pl-[2.4rem]",
    "gap-[2.4rem]",
    "text-[1.8rem]",
    "capitalize"
  );
  todoList.classList.add("todo-item", "h-[6.4rem]", "flex", "justify-center");
}

function checkTodoCompleted() {
  const todoItem = document.querySelectorAll(".todo-item");

  [...todoItem].map(todo =>{

    const checkbox = todo.querySelector(".checkbox");
    
      checkbox.addEventListener("click", (e) => {
        e.preventDefault();
        
        let todoText = checkbox.nextElementSibling;
        let itemChecked = checkedImage();
        
        if (!checkbox.classList.contains("checked")) {
          checkbox.appendChild(itemChecked);
          todoText.classList.remove("text-[#494C6B]");
          todoText.classList.add("line-through", "text-[#D1D2DA]");
          checkbox.classList.add("checked");
          console.log(todoText.textContent);
          console.log(checkbox);
        } else {
          const checkedLabel = checkbox.querySelector(".checked-label");
          checkbox.removeChild(checkedLabel);
          todoText.classList.remove("line-through", "text-[#D1D2DA]");
          todoText.classList.add("text-[#494C6B]");
          checkbox.classList.remove("checked");
          console.log(checkbox)
        }
      });
    }); 
}

function checkedImage() {
  let div = document.createElement("div");
  div.classList.add(
    "checked-label",
    "w-[2.4rem]",
    "h-[2.4rem]",
    "bg-gradient-to-br",
    "from-[#55DDFF]",
    "to-[#C058F3]",
    "rounded-full",
    "flex",
    "justify-center",
    "items-center"
  );

  let img = document.createElement("img");
  img.src = iconCheck;
  img.classList.add("h-[1rem]", "w-[1rem]");

  div.appendChild(img);
  return div;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (enterTodo.value.trim() !== "") {
    addTodoItem();
    renderTodoItem();
    checkTodoCompleted();
    console.log(todos);
  }
});
