import Project from '../project/project.js'; 
import ToDo from '../todos/todo.js';

const projects = []; 

const projectManager = (() => {

    function getProjects() {
        return projects; 
    }

    function setProjects(value) {
        for (let i = 0; i < projects.length; i++) {
            projects.pop(); 
        }

        Array.from(value).forEach(project => {
            const proj = createProject(project.projectName); 

            project.projectToDos.forEach(toDo => {
                if (toDo !== undefined && toDo !== null) {
                    proj.addToDo(new ToDo(toDo.title, toDo.description, toDo.priority, toDo.date)); 
                }
            }); 
        }); 
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
        if (projects.length === 0) {
            createProject("default"); 
        }
    })(); 

    return {getProjects, setProjects, createProject, deleteProject}
})();

export default projectManager; 