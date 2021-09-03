import Project from '../project/project.js'; 

const projects = []; 

const projectManager = (() => {

    function getProjects() {
        return projects; 
    }

    function setProjects(value) {
        Array.from(value).forEach(project => {
            console.log(project); 
            projects.push(project); 
        })
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