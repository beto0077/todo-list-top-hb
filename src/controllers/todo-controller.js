import { Todo } from "../models/Todo";
import { bindBackTasks, loadTodosGrid, loadTodoNotes } from "../display/main-display";
import { bindTodoFormSubmit, bindNoteSubmit, bindOpenNotes, bindChangeStatus, bindDeleteTodo, bindDeleteNote } from "../display/todo-display";

let activeProject = {};
let activeTodo = {};
let storageSavingTool = null;

export function setActiveProject(project) {
    activeProject = project;
    loadTodosGrid(activeProject.name, activeProject.getTasks());
}

function setActiveTodo(todoId) {
    activeTodo = activeProject.getTasks().find(item => item.id === todoId);
    loadTodoNotes(activeTodo.title, activeTodo.getNotes());
}

export function bindStorageSavingTool(callback) {
    storageSavingTool = callback;
}

function commitProjectChanges() {
    if (storageSavingTool) storageSavingTool();
}

function createTodo(todoData) {
    activeProject.addTask(new Todo(todoData.title, todoData.description, todoData.dueDate, todoData.priority));
    commitProjectChanges();
    loadTodosGrid(activeProject.name, activeProject.getTasks());
}

function createTodoNote(noteData) {
    activeTodo.addNote(noteData.note);
    commitProjectChanges();
    loadTodoNotes(activeTodo.title, activeTodo.getNotes());
}

function changeCompletedStatus(todoId) {
    const todoCompleted = activeProject.getTasks().find(item => item.id === todoId);
    todoCompleted.changeStatusCompleted();
    commitProjectChanges();
    loadTodosGrid(activeProject.name, activeProject.getTasks());
}

function deleteTodo(todoId) {
    activeProject.deleteTask(todoId);
    commitProjectChanges();
    loadTodosGrid(activeProject.name, activeProject.getTasks());
}

function deleteTodoNote(noteIndex) {
    activeTodo.deleteNote(noteIndex);
    commitProjectChanges();
    loadTodoNotes(activeTodo.title, activeTodo.getNotes());
}

bindTodoFormSubmit(createTodo);
bindNoteSubmit(createTodoNote);
bindOpenNotes(setActiveTodo);
bindChangeStatus(changeCompletedStatus);
bindDeleteTodo(deleteTodo);
bindDeleteNote(deleteTodoNote);
bindBackTasks(() => setActiveProject(activeProject));