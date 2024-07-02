import { captureTodo, todos, todoCompletedCheck } from '../models/todoModel.js';
import { renderTodoElements, renderTodoCompletedCheck, renderTodoIncomplete } from '../views/todoView.js';

export function handleTodoSubmission() {
    let todoSubmit = document.querySelector('.todo-form');

    todoSubmit.addEventListener('submit', (e) => {
        e.preventDefault();
        captureTodo();
        renderTodoElements(todos);
        handleTodoCompletedChecked();
    });
}

export function handleTodoCompletedChecked() {

        let todoButton = document.querySelectorAll('.todo-button');
        
        todoButton.forEach(item=>{
            
            item.addEventListener('click', (e)=>{
                e.preventDefault();
                
                if (!todoCompletedCheck(item)) {
                    renderTodoCompletedCheck(item);
                } else {
                    renderTodoIncomplete(item);
                }
            })
        })
}
