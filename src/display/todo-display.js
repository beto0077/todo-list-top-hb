import { createTodoForm } from "../ui/todo-form";
import { createTodoCard } from "../ui/todo-card";
import { createNoteForm } from "../ui/note-form";
import { createNoteCard } from "../ui/note-card";

let onTodoFormSubmit = null;
let onNoteFormSubmit = null;
let onClickOpenNotes = null;
let onClickChangeStatus = null;
let onClickDeleteTodo = null;
let onClickDeleteNote = null;

function handleTodoFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const todoData = {
        title: formData.get("title"),
        description: formData.get("description"),
        dueDate: formData.get("dueDate"),
        priority: formData.get("priority"),
    }
    event.target.reset();
    if (onTodoFormSubmit) onTodoFormSubmit(todoData);
}

function handleNoteFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const noteData = {
        note: formData.get("note-text"),
    }
    event.target.reset();
    if (onNoteFormSubmit) onNoteFormSubmit(noteData);
}

function handleOpenNotes(event) {
    if (onClickOpenNotes) onClickOpenNotes(event.target.parentNode.parentNode.id);
}

function handleChangeStatus(event) {
    if (onClickChangeStatus) onClickChangeStatus(event.target.parentNode.parentNode.id);
}

function handleDeleteTodo(event) {
    if (onClickDeleteTodo) onClickDeleteTodo(event.target.parentNode.parentNode.id);
}

function handleDeleteNote(event) {
    if (onClickDeleteNote) onClickDeleteNote(event.target.parentNode.id);
}

export function bindTodoFormSubmit(callback) {
    onTodoFormSubmit = callback;
}

export function bindNoteSubmit(callback) {
    onNoteFormSubmit = callback;
}

export function bindOpenNotes(callback) {
    onClickOpenNotes = callback;
}

export function bindChangeStatus(callback) {
    onClickChangeStatus = callback;
}

export function bindDeleteTodo(callback) {
    onClickDeleteTodo = callback;
}

export function bindDeleteNote(callback) {
    onClickDeleteNote = callback;
}

export function displayTodoForm(container) {
    const todoForm = createTodoForm();
    todoForm.addEventListener("submit", handleTodoFormSubmit);
    container.appendChild(todoForm);
}

export function displayNoteForm(container) {
    const noteForm = createNoteForm();
    noteForm.addEventListener("submit", handleNoteFormSubmit);
    container.appendChild(noteForm);
}

export function displayTodosGrid(container, projectName, todos) {
    const gridContainer = document.createElement("div");
    const projectNameHeading = document.createElement("h2");
    gridContainer.classList.add("todo-grid");
    projectNameHeading.textContent = projectName;

    todos.forEach(todo => {
        const todoCard = createTodoCard(todo);
        const openButton = todoCard.querySelector('button[data-action="open"]');
        const changeStatusButton = todoCard.querySelector('button[data-action="change-status"]');
        const deleteButton = todoCard.querySelector('button[data-action="delete"]');
        openButton.addEventListener("click", handleOpenNotes);
        changeStatusButton.addEventListener("click", handleChangeStatus);
        deleteButton.addEventListener("click", handleDeleteTodo);
        gridContainer.appendChild(todoCard);
    });

    container.appendChild(projectNameHeading);
    container.appendChild(gridContainer);
}

export function displayNotesGrid(container, todoTitle, notes) {
    const gridContainer = document.createElement("div");
    const todoTitleHeading = document.createElement("h2");
    gridContainer.classList.add("note-grid");
    todoTitleHeading.textContent = todoTitle;

    notes.forEach((note, index) => {
        const noteCard = createNoteCard(note, index);
        const deleteButton = noteCard.querySelector('button[data-action="delete"]');
        deleteButton.addEventListener("click", handleDeleteNote);
        gridContainer.appendChild(noteCard);
    });

    container.appendChild(todoTitleHeading);
    container.appendChild(gridContainer);
}