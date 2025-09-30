export class Project {
    constructor(name) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.tasks = [];
    }

    addTask(newTodo) {
        this.tasks.push(newTodo);
    }

    getTasks() {
        return this.tasks;
    }

    deleteTask(taskId) {
        const indexToDelete = this.tasks.findIndex(item => item.id === taskId);
        if (indexToDelete !== -1) {
            this.tasks.splice(indexToDelete, 1);
        }
    }
}