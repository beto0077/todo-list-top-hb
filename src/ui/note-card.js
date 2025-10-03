export function createNoteCard(note, noteIndex) {
    const cardContainer = document.createElement("div");
    const noteText = document.createElement("p");
    const deleteButton = document.createElement("button");

    cardContainer.id = noteIndex;
    cardContainer.classList.add("note-card");
    noteText.textContent = note;
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    cardContainer.appendChild(noteText);
    cardContainer.appendChild(deleteButton);

    return cardContainer;
}