import { loadProjectsMemory, saveProjects } from "../storage/local-storage";
import { Project } from "../models/Project";
import { loadProjectsGrid, bindDataLoad } from "../display/main-display";
import { bindProjectFormSubmit, bindOpenProject, bindDeleteProject } from "../display/project-display";
import { setActiveProject, bindStorageSavingTool } from "./todo-controller";

let projectList = [];

function updateProjectList() {
    projectList = loadProjectsMemory();
    loadProjectsGrid(projectList);
}

function createProject(projectData) {
    projectList.push(new Project(projectData.name));
    saveProjects(projectList);
    loadProjectsGrid(projectList);
}

function deleteProject(projectId) {
    const indexToDelete = projectList.findIndex(item => item.id === projectId);
    if (indexToDelete !== -1) {
        projectList.splice(indexToDelete, 1);
    }
    saveProjects(projectList);
    loadProjectsGrid(projectList);
}

function loadActiveProject(projectId) {
    const projectIndex = projectList.findIndex(item => item.id === projectId);
    if (projectIndex !== -1) {
        setActiveProject(projectList[projectIndex]);
    }
}

bindDataLoad(updateProjectList);
bindProjectFormSubmit(createProject);
bindOpenProject(loadActiveProject);
bindDeleteProject(deleteProject);
bindStorageSavingTool(() => saveProjects(projectList));
console.log("I think I'm online bro...");