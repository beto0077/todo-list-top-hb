export function createNoteCard(note, noteIndex) {
    const cardContainer = document.createElement("div");
    const noteText = document.createElement("p");
    const deleteButton = document.createElement("button");

    cardContainer.id = noteIndex;
    cardContainer.classList.add("note-card");
    noteText.textContent = note;
    deleteButton.classList.add("card-button");
    deleteButton.classList.add("delete-button");
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "X";

    cardContainer.appendChild(noteText);
    cardContainer.appendChild(deleteButton);

    return cardContainer;
}