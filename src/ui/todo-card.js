export function createTodoCard(todo) {
    const cardContainer = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");
    const totalNotesTask = document.createElement("p");
    const completedBox = document.createElement("div");
    const completedLabel = document.createElement("p");
    const completedButton = document.createElement("button");
    const buttonsBox = document.createElement("div");
    const openNotesButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    cardContainer.id = todo.id;
    cardContainer.classList.add("todo-card");
    title.textContent = todo.title;
    description.textContent = todo.description;
    dueDate.textContent = `Due date: ${todo.dueDate}`;
    priority.textContent = `Priority: ${todo.priority}`;
    totalNotesTask.textContent = `Active task notes: ${todo.notes.length}`;
    completedBox.classList.add("todo-completed-box");
    completedLabel.textContent = "Task completed:";
    completedButton.classList.add(todo.completed ? "completed" : "uncompleted");
    completedButton.classList.add("completed-button");
    completedButton.dataset.action = "change-status";
    completedButton.textContent = todo.completed ? "Completed ✓" : "Not completed ✗";
    buttonsBox.classList.add("todo-card-buttons");
    openNotesButton.classList.add("card-button");
    openNotesButton.classList.add("open-button");
    openNotesButton.dataset.action = "open";
    openNotesButton.textContent = "Open notes";
    deleteButton.classList.add("card-button");
    deleteButton.classList.add("delete-button");
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    cardContainer.appendChild(title);
    cardContainer.appendChild(description);
    cardContainer.appendChild(dueDate);
    cardContainer.appendChild(priority);
    cardContainer.appendChild(totalNotesTask);
    completedBox.appendChild(completedLabel);
    completedBox.appendChild(completedButton);
    cardContainer.appendChild(completedBox);
    buttonsBox.appendChild(openNotesButton);
    buttonsBox.appendChild(deleteButton);
    cardContainer.appendChild(buttonsBox);

    return cardContainer;
}