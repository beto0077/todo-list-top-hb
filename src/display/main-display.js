import { displayProjectForm, displayProjectsGrid } from "./project-display";

const mainSiteContent = document.querySelector(".main-site-content");
const navigationButtons = document.querySelectorAll("button[data-content");

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
    if (!event.target.dataset) {

    } else {
        const chosenContent = event.target.dataset.content;
        cleanContainer(mainSiteContent);
        switch (chosenContent) {
            case "projects":
                break;
            case "new-project":
                displayProjectForm(mainSiteContent);
                break;
            case "new-todo":

                break;

            default:
                break;
        }
    }
}

export function bindDataLoad(callback) {
    onContentLoaded = callback;
}

export function loadProjectsGrid(projects) {
    cleanContainer(mainSiteContent);
    displayProjectsGrid(mainSiteContent, projects);
}

navigationButtons.forEach(button => {
    button.addEventListener("click", loadContent);
});
document.addEventListener("DOMContentLoaded", handleDataLoad);