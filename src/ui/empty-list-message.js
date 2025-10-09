export function createEmptyListMsg(specificList) {
    const messageContainer = document.createElement("div");
    const messageText = document.createElement("p");

    messageContainer.classList.add("empLst-message-box");
    messageText.textContent = `There are no ${specificList} created yet.`;

    messageContainer.appendChild(messageText);

    return messageContainer;
}