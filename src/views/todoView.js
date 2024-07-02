
export function createTodoElements(item) {
  let li = document.createElement("li");
  let todoButton = document.createElement("button");
  let todoText = document.createElement("p");

  li.className +=
    "todo-lists w-[54rem] h-[6.4rem] text-[1.8rem] pl-[2.4rem] capitalize bg-white flex gap-[2.4rem] items-center rounded-t-lg border-b-[1px]";
  todoButton.className += "todo-button w-[2.4rem] h-[2.4rem] rounded-full border border-[#E3E4F1]"
  todoText.className += "todo-text";

  todoText.textContent = item;

  li.appendChild(todoButton);
  li.appendChild(todoText);
  return li;
}

export function renderTodoElements(todos) {
  let todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";
  todos.slice().reverse().map((item,index) => {
      const todoElement = createTodoElements(item);
        if (index < 6) {
            todoContainer.appendChild(todoElement);
        }
    
    });
}

export function renderTodoCompletedCheck(item){
    let checkedContainer = document.createElement('div')
    let checkedImage = document.createElement('img');
    let todoText = item.nextElementSibling;
    todoText.className += " line-through text-[#D1D2DA]"

    checkedImage.src = '../../assets/images/universalImages/icon-check.svg' 
    checkedImage.alt = 'item-checked'
    checkedContainer.className += "checked w-[2.4rem] h-[2.4rem] rounded-full bg-gradient-to-br from-[#55DDFF] to-[#C058F3] flex items-center justify-center"
    checkedContainer.appendChild(checkedImage)  
    item.appendChild(checkedContainer)
}

export function renderTodoIncomplete(item){
    let todoText = item.nextElementSibling;
    todoText.className = " todo-text "
    item.innerHTML = '';
} 

