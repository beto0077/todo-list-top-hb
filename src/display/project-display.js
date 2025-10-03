import { createProjectForm } from "../ui/project-form";
import { createProjectCard } from "../ui/project-card";

let onFormSubmit = null;
let onClickOpen = null;
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

function handleOpenProject(event) {
    if (onClickOpen) onClickOpen(event.target.parentNode.parentNode.id);
}

function handleDeleteProject(event) {
    if (onClickDelete) onClickDelete(event.target.parentNode.parentNode.id);
}

export function bindProjectFormSubmit(callback) {
    onFormSubmit = callback;
}

export function bindOpenProject(callback) {
    onClickOpen = callback;
}

export function bindDeleteProject(callback) {
    onClickDelete = callback;
}

export function displayProjectForm(container) {
    const projectForm = createProjectForm();
    projectForm.addEventListener("submit", handleFormSubmit);
    container.appendChild(projectForm);
}

export function displayProjectsGrid(container, projects) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("project-grid");

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        const openButton = projectCard.querySelector('button[data-action="open"]');
        const deleteButton = projectCard.querySelector('button[data-action="delete"]');
        openButton.addEventListener("click", handleOpenProject);
        deleteButton.addEventListener("click", handleDeleteProject);
        gridContainer.appendChild(projectCard);
    });

    container.appendChild(gridContainer);
}