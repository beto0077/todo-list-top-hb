import { createProjectForm } from "../ui/project-form";
import { createProjectCard } from "../ui/project-card";

let onFormSubmit = null;
let onClickDelete = null;

function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const projectData = {
        name: formData.get("name"),
    }
    event.target.reset();
    if (onFormSubmit) onFormSubmit(projectData);
}

function handleDeleteProject(event) {
    if (onClickDelete) onClickDelete(event.target.parentNode.id);
}

export function bindFormSubmit(callback) {
    onFormSubmit = callback;
};

export function bindDeleteProject(callback) {
    onClickDelete = callback;
}

export function displayProjectForm(container) {
    container.appendChild(createProjectForm());
    const projectForm = document.querySelector(".project-form");
    projectForm.addEventListener("submit", handleFormSubmit);
}

export function displayProjectsGrid(container, projects) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("project-grid");

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectCard.addEventListener("click", handleDeleteProject);
        gridContainer.appendChild(projectCard);
    });

    container.appendChild(gridContainer);
}
// export function displayProjectTasks() {
//     const projectIndex = projectList.findIndex(item => item.id === projectId);
//     if (projectIndex !== -1) {
//         const currentTasks = projectList[projectIndex].getTasks();
//         currentTasks.forEach(task => {
//             console.log(task);
//         });
//     }
// }