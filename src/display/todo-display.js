import { createTodoForm } from "../ui/todo-form";
import { createTodoCard } from "../ui/todo-card";

let onFormSubmit = null;
let onClickDelete = null;

function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const todoData = {
        title: formData.get("title"),
        description: formData.get("description"),
        dueDate: formData.get("dueDate"),
        priority: formData.get("priority"),
    }
    event.target.reset();
    if (onFormSubmit) onFormSubmit(todoData);
}

function handleDeleteTodo(event) {
    if (onClickDelete) onClickDelete(event.target.parentNode.parentNode.id);
}

export function bindTodoFormSubmit(callback) {
    onFormSubmit = callback;
}

export function bindDeleteTodo(callback) {
    onClickDelete = callback;
}

export function displayTodoForm(container) {
    const todoForm = createTodoForm();
    todoForm.addEventListener("submit", handleFormSubmit);
    container.appendChild(todoForm);
}

export function displayTodosGrid(container, todos) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("todo-grid");

    todos.forEach(todo => {
        const todoCard = createTodoCard(todo);
        const deleteButton = todoCard.querySelector('button[data-action="delete"]');
        deleteButton.addEventListener("click", handleDeleteTodo);
        gridContainer.appendChild(todoCard);
    });

    container.appendChild(gridContainer);
}