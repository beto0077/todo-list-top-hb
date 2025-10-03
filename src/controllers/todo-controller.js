import { Todo } from "../models/Todo";
import { bindBackTasks, loadTodosGrid, loadTodoNotes } from "../display/main-display";
import { bindTodoFormSubmit, bindNoteSubmit, bindOpenNotes, bindDeleteTodo, bindDeleteNote } from "../display/todo-display";

let activeProject = {};
let activeTodo = {};
let storageSavingTool = null;

export function setActiveProject(project) {
    activeProject = project;
    loadTodosGrid(activeProject.getTasks());
}

function setActiveTodo(todoId) {
    activeTodo = activeProject.getTasks().find(item => item.id === todoId);
    loadTodoNotes(activeTodo.getNotes());
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
    loadTodosGrid(activeProject.getTasks());
}

function createTodoNote(noteData) {
    activeTodo.addNote(noteData.note);
    commitProjectChanges();
    loadTodoNotes(activeTodo.getNotes());
}

function deleteTodo(todoId) {
    activeProject.deleteTask(todoId);
    commitProjectChanges();
    loadTodosGrid(activeProject.getTasks());
}

function deleteTodoNote(noteIndex) {
    activeTodo.deleteNote(noteIndex);
    commitProjectChanges();
    loadTodoNotes(activeTodo.getNotes());
}

bindTodoFormSubmit(createTodo);
bindNoteSubmit(createTodoNote);
bindOpenNotes(setActiveTodo);
bindDeleteTodo(deleteTodo);
bindDeleteNote(deleteTodoNote);
bindBackTasks(() => setActiveProject(activeProject));