export function createNoteForm() {
    const formBody = document.createElement("form");
    const fieldsetBody = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const noteBox = document.createElement("div");
    const noteTextareaLabel = document.createElement("label");
    const noteTextarea = document.createElement("textarea");
    const submitButton = document.createElement("button");

    formBody.classList.add("note-form");
    legend.textContent = "Create new note:";
    noteTextareaLabel.htmlFor = "text-box";
    noteTextareaLabel.textContent = "Note:";
    noteTextarea.id = "text-box";
    noteTextarea.name = "note-text";
    noteTextarea.required = true;
    submitButton.classList.add("submit-button");
    submitButton.type = "submit";
    submitButton.textContent = "Create Note";

    fieldsetBody.appendChild(legend);
    noteBox.appendChild(noteTextareaLabel);
    noteBox.appendChild(noteTextarea);
    fieldsetBody.appendChild(noteBox);
    fieldsetBody.appendChild(submitButton);
    formBody.appendChild(fieldsetBody);

    return formBody;
}