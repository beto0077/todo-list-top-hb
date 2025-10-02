export function createProjectForm() {
    const formBody = document.createElement("form");
    const fieldsetBody = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const nameBox = document.createElement("div");
    const nameInputLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const submitButton = document.createElement("button");

    formBody.classList.add("project-form");
    legend.textContent = "Create new project:";
    nameInputLabel.htmlFor = "project-name";
    nameInputLabel.textContent = "Project name:";
    nameInput.type = "text";
    nameInput.id = "project-name";
    nameInput.name = "name";
    nameInput.required = true;
    submitButton.classList.add("submit-button");
    submitButton.type = "submit";
    submitButton.textContent = "Create Project";

    fieldsetBody.appendChild(legend);
    nameBox.appendChild(nameInputLabel);
    nameBox.appendChild(nameInput);
    fieldsetBody.appendChild(nameBox);
    fieldsetBody.appendChild(submitButton);
    formBody.appendChild(fieldsetBody);

    return formBody;
}