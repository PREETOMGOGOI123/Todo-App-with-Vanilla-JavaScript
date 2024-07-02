export let todos = [];
export let todosCompleted = [];

export function captureTodo() {
    let todoInput = document.getElementById('todo__user-input');
    let todo = todoInput.value;
    if (todo.trim() !== '') {
        todos = [...todos, todo];
        todoInput.value = '';
    }
}

export function todoCompletedCheck(item) {
    
    let todoTextElement = item.nextElementSibling;
    if (!todoTextElement) {
      console.error('Next sibling (todo text) not found for item:', item);
      return false;
    }
    
    let todoText = todoTextElement.textContent;
    
    if (item.children.length > 0) {
      todosCompleted = todosCompleted.filter(todo => todo !== todoText);
      console.log('Updated todosCompleted (removal):', todosCompleted);
      return true;
    } else {
      todosCompleted = [...todosCompleted, todoText];
      console.log('Updated todosCompleted (addition):', todosCompleted);
      return false;
    }
  }
  

export function buttonCountTodosLeft(){
    let textCountTodosLeft = document.getElementById('text-count-todos-left');
}