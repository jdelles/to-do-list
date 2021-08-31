import {load, save} from '../storage/storage.js'; 
import Project from '../project/project.js'; 
import ToDo from '../todos/todo.js'; 


let projects = []; 

const projectManager = () => {

    function getProjects() {
        return projects; 
    }
    // let activeProject; 
    // let defaultProject; 

    // const projects = new Map(); 
    // const projectKeys = new Array(); 

    // const validate = (name) => {
    //     return !projects.has(name); 
    // }

    // const setActiveProject = (newActive) => {
    //     activeProject = newActive; 
    //     // update UI
    // }

    // const createProject = (name) => {
    //     if (validate(name)) {
    //         const newProject = project(name); 
    //         setActiveProject(newProject); 
    //         projects.set(name, newProject);
    //         projectKeys.push(name); 
    //         return newProject;  
    //     } else {
    //         alert('Project name must be unique'); 
    //     }
    // }

    // const deleteProject = (name) => {
    //     const toDelete = projects.get(name); 
    //     toDelete.getToDos().forEach(removeTodoFromProject); 
    //     projects.delete(name); 
    //     const index = projectKeys.indexOf(name); 
    //     if (index > -1) {
    //         projectKeys.splice(index, 1); 
    //     }
    //     activeProject = defaultProject; 
    //     // update UI
    // }

    // const createDefaultProject = (() => {
    //     defaultProject = createProject("default"); 
    //     projectKeys.push("default"); 
    //     activeProject = defaultProject; 
    // })(); 

    // const addTodoToSpecifiedProject = (title, description, date, priority, projectName) => {
    //     projects.get(projectName).addTodoToProject(title, description, date, priority); 
    //     // update UI
    // }

    // const removeTodoFromSpecifiedProject = (title, description, date, priority, projectName) => {
    //     projects.get(projectName).removeTodoToProject(title, description, date, priority); 
    //     // update UI
    // }

    // return {activeProject, setActiveProject, createProject, deleteProject}
}

export default projectManager; 
