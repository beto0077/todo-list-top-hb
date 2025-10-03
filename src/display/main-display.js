import { displayProjectForm, displayProjectsGrid } from "./project-display";
import { displayTodoForm, displayNoteForm, displayTodosGrid, displayNotesGrid } from "./todo-display";

const mainSiteContent = document.querySelector(".main-site-content");
const navigationButtons = document.querySelectorAll("button[data-content");
const projectsButton = Array.from(navigationButtons).find(button => button.dataset.content === "projects");
const newProjectButton = Array.from(navigationButtons).find(button => button.dataset.content === "new-project");
const newTodoButton = Array.from(navigationButtons).find(button => button.dataset.content === "new-todo");
const newNoteButton = Array.from(navigationButtons).find(button => button.dataset.content === "new-note");
const backTasksButton = Array.from(navigationButtons).find(button => button.dataset.content === "back-tasks");

let onContentLoaded = null;
let onClickBackTasks = null;

function cleanContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function handleDataLoad() {
    if (onContentLoaded) onContentLoaded();
}

function handleBackTasks() {
    if (onClickBackTasks) onClickBackTasks();
}

function loadContent(event) {
    const chosenContent = event.target.dataset.content;
    cleanContainer(mainSiteContent);
    switch (chosenContent) {
        case "projects":
            handleDataLoad();
            break;

        case "new-project":
            displayProjectForm(mainSiteContent);
            break;

        case "new-todo":
            displayTodoForm(mainSiteContent);
            break;

        case "new-note":
            displayNoteForm(mainSiteContent);
            break;

        case "back-tasks":
            handleBackTasks();
            break;

        default:
            alert("Something went wrong, sorry for the inconvenience bro...");
            break;
    }
}

export function bindDataLoad(callback) {
    onContentLoaded = callback;
}

export function bindBackTasks(callback) {
    onClickBackTasks = callback;
}

export function loadProjectsGrid(projects) {
    projectsButton.style.display = "none";
    newProjectButton.style.display = "block";
    newTodoButton.style.display = "none";
    newNoteButton.style.display = "none";
    backTasksButton.style.display = "none";
    cleanContainer(mainSiteContent);
    displayProjectsGrid(mainSiteContent, projects);
}

export function loadTodosGrid(projectName, projectTodos) {
    projectsButton.style.display = "block";
    newProjectButton.style.display = "none";
    newTodoButton.style.display = "block";
    newNoteButton.style.display = "none";
    backTasksButton.style.display = "none";
    cleanContainer(mainSiteContent);
    displayTodosGrid(mainSiteContent, projectName, projectTodos);
}

export function loadTodoNotes(todoTitle, notes) {
    projectsButton.style.display = "none";
    newProjectButton.style.display = "none";
    newTodoButton.style.display = "none";
    newNoteButton.style.display = "block";
    backTasksButton.style.display = "block";
    cleanContainer(mainSiteContent);
    displayNotesGrid(mainSiteContent, todoTitle, notes);
}

navigationButtons.forEach(button => {
    button.addEventListener("click", loadContent);
});
document.addEventListener("DOMContentLoaded", handleDataLoad);