export function createProjectCard(project) {
    const cardContainer = document.createElement("div");
    const projectName = document.createElement("h3");
    const todosToComplete = document.createElement("p");
    const buttonsBox = document.createElement("div");
    const openProjectButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    cardContainer.id = project.id;
    cardContainer.classList.add("project-card");
    projectName.textContent = project.name;
    todosToComplete.textContent = `Tasks to complete: ${project.tasks.length}`;
    buttonsBox.classList.add("project-card-buttons");
    openProjectButton.classList.add("card-button");
    openProjectButton.classList.add("open-button");
    openProjectButton.dataset.action = "open";
    openProjectButton.textContent = "Open project";
    deleteButton.classList.add("card-button");
    deleteButton.classList.add("delete-button");
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    cardContainer.appendChild(projectName);
    cardContainer.appendChild(todosToComplete);
    buttonsBox.appendChild(openProjectButton);
    buttonsBox.appendChild(deleteButton);
    cardContainer.appendChild(buttonsBox);

    return cardContainer;
}