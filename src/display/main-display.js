import { displayProjectForm, displayProjectsGrid } from "./project-display";
import { displayTodoForm, displayTodosGrid } from "./todo-display";

const mainSiteContent = document.querySelector(".main-site-content");
const navigationButtons = document.querySelectorAll("button[data-content");
const projectsButton = Array.from(navigationButtons).find(button => button.dataset.content === "projects");
const newProjectButton = Array.from(navigationButtons).find(button => button.dataset.content === "new-project");
const newTodoButton = Array.from(navigationButtons).find(button => button.dataset.content === "new-todo");

let onContentLoaded = null;

function cleanContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function handleDataLoad() {
    if (onContentLoaded) onContentLoaded();
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

        default:
            alert("Something went wrong, sorry for the inconvenience bro...");
            break;
    }
}

export function bindDataLoad(callback) {
    onContentLoaded = callback;
}

export function loadProjectsGrid(projects) {
    projectsButton.style.display = "none";
    newProjectButton.style.display = "block";
    newTodoButton.style.display = "none";
    cleanContainer(mainSiteContent);
    displayProjectsGrid(mainSiteContent, projects);
}

export function loadTodosGrid(projectTodos) {
    projectsButton.style.display = "block";
    newProjectButton.style.display = "none";
    newTodoButton.style.display = "block";
    cleanContainer(mainSiteContent);
    displayTodosGrid(mainSiteContent, projectTodos);
}

navigationButtons.forEach(button => {
    button.addEventListener("click", loadContent);
});
document.addEventListener("DOMContentLoaded", handleDataLoad);