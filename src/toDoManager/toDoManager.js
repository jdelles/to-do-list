import {loadFromStorage, saveToStorage} from '../storage/storage.js'; 
import Project from '../project/project.js'; 
import ToDo from '../todos/todo.js'; 

const projects = []; 

const projectManager = (() => {

    function getProjects() {
        return projects; 
    }

    const createProject = (name) => {
        const newProject = new Project(name); 
        // setActiveProject(newProject); 
        projects.push(newProject); 
        return newProject;  
    }

    const deleteProject = (name) => {
        const index = projects.indexOf(name); 
        if (index > -1) {
            projects.splice(index, 1); 
        }
    }

    const createDefaultProject = (() => {
        createProject("default"); 
    })(); 

    // const addTodoToProject = (title, description, date, priority) => {
    //     activeProject.addTodo(new ToDo(title, description, date, priority)); 
    // }

    // const removeTodoFromProject = (todo) => {
    //     activeProject.removeToDo(todo); 
    //     // update UI
    // }

    return {getProjects, createProject, deleteProject}
})();

export default projectManager; 