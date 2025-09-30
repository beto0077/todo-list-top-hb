export class Todo {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = [];
        this.completed = false;
    }

    addNote(newNote){
        this.notes.push(newNote);
    }

    getNotes() {
        return this.notes;
    }

    changeStatusCompleted () {
        this.completed = !this.completed;
    }
}