export function createProjectCard(project) {
    const cardContainer = document.createElement("div");
    const projectName = document.createElement("p");
    const todosToComplete = document.createElement("p");
    const deleteButton = document.createElement("button");

    cardContainer.id = project.id;
    cardContainer.classList.add("project-card");
    projectName.textContent = project.name;
    todosToComplete.textContent = `Tasks to complete: ${project.tasks.length}`;
    deleteButton.textContent = "Delete";

    cardContainer.appendChild(projectName);
    cardContainer.appendChild(todosToComplete);
    cardContainer.appendChild(deleteButton);

    return cardContainer;
}