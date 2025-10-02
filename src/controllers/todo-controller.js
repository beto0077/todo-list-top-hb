import { Todo } from "../models/Todo";
import { loadTodosGrid } from "../display/main-display";
import { bindTodoFormSubmit, bindDeleteTodo } from "../display/todo-display";

let activeProject = {};
let storageSavingTool = null;

export function setActiveProject(project) {
    activeProject = project;
    loadTodosGrid(activeProject.getTasks());
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

function deleteTodo(todoId) {
    activeProject.deleteTask(todoId);
    commitProjectChanges();
    loadTodosGrid(activeProject.getTasks());
}

bindTodoFormSubmit(createTodo);
bindDeleteTodo(deleteTodo);