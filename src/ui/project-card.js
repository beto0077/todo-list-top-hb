export function createProjectCard(project) {
    const cardContainer = document.createElement("div");
    const projectName = document.createElement("p");
    const todosToComplete = document.createElement("p");
    const buttonsBox = document.createElement("div");
    const openProjectButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    cardContainer.id = project.id;
    cardContainer.classList.add("project-card");
    projectName.textContent = project.name;
    todosToComplete.textContent = `Tasks to complete: ${project.tasks.length}`;
    buttonsBox.classList.add("project-card-buttons");
    openProjectButton.dataset.action = "open";
    openProjectButton.textContent = "Open project";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    cardContainer.appendChild(projectName);
    cardContainer.appendChild(todosToComplete);
    buttonsBox.appendChild(openProjectButton);
    buttonsBox.appendChild(deleteButton);
    cardContainer.appendChild(buttonsBox);

    return cardContainer;
}