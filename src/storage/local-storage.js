import { Project } from "../models/Project";
import { Todo } from "../models/Todo";

const STORAGE_KEY = 'projects';

export function saveProjects(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function loadProjectsMemory() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];

    const rawProjects = JSON.parse(data);

    return rawProjects.map(p => {
        const project = new Project(p.name);
        project.id = p.id;

        p.tasks.forEach(t => {
            const todo = new Todo(t.title, t.description, t.dueDate, t.priority);
            todo.id = t.id;
            todo.notes = t.notes;
            todo.completed = t.completed;

            project.addTask(todo);
        });

        return project;
    });
}
