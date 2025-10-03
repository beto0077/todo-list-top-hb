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

    deleteNote(NoteIndex) {
        if (NoteIndex !== -1) {
            this.notes.splice(NoteIndex, 1);
        }
    }

    changeStatusCompleted () {
        this.completed = !this.completed;
    }
}