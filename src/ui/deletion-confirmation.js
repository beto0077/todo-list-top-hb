export function askDeletionConfirmation(itemToDelete) {
    const userAnswer = prompt(`Please enter "Yes" or "Y" to confirm that you want to delete this ${itemToDelete}.`);
    return (/^(y|yes)$/i).test(userAnswer);
}