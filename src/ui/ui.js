import projectManager from '../toDoManager/toDoManager.js'; 
import ToDo from '../todos/todo.js';

function toDoForm(project) {
    const main = document.querySelector("main");
    const formDiv = document.createElement("div"); 

    const intro = document.createElement("h2"); 
    intro.textContent = "Add a new to do"; 
    
    const form = document.createElement("form");

    const title = document.createElement("input"); 
    title.type = "text"; 
    title.placeholder = "Title"; 
    title.id = "title"; 

    const description = document.createElement("input"); 
    description.type = "text"; 
    description.placeholder = "Description"; 
    description.id = "description";

    const priority = document.createElement("input"); 
    priority.type = "text"; 
    priority.placeholder = "Priority"; 
    priority.id = "priority";

    const date = document.createElement("input"); 
    date.type = "text"; 
    date.placeholder = "Date"; 
    date.id = "date"; 

    const submit = document.createElement("button"); 
    submit.textContent = "Submit"; 
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const title = document.querySelector("#title").value; 
        const description = document.querySelector("#description").value; 
        const priority = document.querySelector("#priority").value; 
        const date = document.querySelector("#date").value; 
        project.addToDo(new ToDo(title, description, priority, date)); 
        updateDisplay(); 
        main.removeChild(formDiv); 
    });

    const cancel = document.createElement("button"); 
    cancel.classList.add('ghost-button'); 
    cancel.textContent = "Cancel"; 
    cancel.addEventListener('click', (event) => {
        event.preventDefault();
        main.removeChild(formDiv); 
        updateDisplay(); 
    });

    form.appendChild(title); 
    form.appendChild(description);
    form.appendChild(priority);
    form.appendChild(date);
    form.appendChild(submit); 
    form.appendChild(cancel); 

    formDiv.appendChild(intro); 
    formDiv.appendChild(form);
    formDiv.id = "toDoForm"; 

    main.appendChild(formDiv); 
}

function showToDoDetails(project, toDo) {
    const projectList = document.querySelector("#projectList");    
    const projectForm = document.querySelector("#projectForm"); 
    
    if (!projectList.classList.contains('hidden')) {
        projectList.classList.add('hidden'); 
    }
    if (!projectForm.classList.contains('hidden')) {
        projectForm.classList.add('hidden'); 
    }

    const currentTitle = toDo.getTitle(); 
    const currentDescription = toDo.getDescription();
    const currentPriority = toDo.getPriority(); 
    const currentDate = toDo.getDate(); 

    const main = document.querySelector("main");
    const formDiv = document.createElement("div"); 

    const intro = document.createElement("h2"); 
    intro.textContent = "Edit this to do"; 
    
    const form = document.createElement("form");

    const title = document.createElement("input"); 
    title.type = "text"; 
    title.placeholder = currentTitle;  
    title.id = "title"; 

    const description = document.createElement("input"); 
    description.type = "text"; 
    description.placeholder = currentDescription; 
    description.id = "description";

    const priority = document.createElement("input"); 
    priority.type = "text"; 
    priority.placeholder = currentPriority; 
    priority.id = "priority";

    const date = document.createElement("input"); 
    date.type = "text"; 
    date.placeholder = currentDate; 
    date.id = "date"; 

    const submit = document.createElement("button"); 
    submit.textContent = "Edit"; 
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const title = document.querySelector("#title").value; 
        const description = document.querySelector("#description").value; 
        const priority = document.querySelector("#priority").value; 
        const date = document.querySelector("#date").value; 
        project.removeToDo(toDo); 
        project.addToDo(new ToDo(title, description, priority, date)); 
        updateDisplay(); 
        main.removeChild(formDiv); 
    });

    const deleteToDo = document.createElement("button"); 
    deleteToDo.textContent = "Delete";
    deleteToDo.classList.add("ghost-button"); 
    deleteToDo.addEventListener('click', (event) => {
        event.preventDefault();
        if (confirm("Are you sure you want to delete this item?")) {
            project.removeToDo(toDo);  
        }
        updateDisplay(); 
        main.removeChild(formDiv); 
    });

    const cancel = document.createElement("button"); 
    cancel.classList.add('ghost-button'); 
    cancel.textContent = "Cancel"; 
    cancel.addEventListener('click', (event) => {
        event.preventDefault();
        main.removeChild(formDiv); 
        updateDisplay(); 
        main.removeChild(formDiv); 
    });

    form.appendChild(title); 
    form.appendChild(description);
    form.appendChild(priority);
    form.appendChild(date);
    form.appendChild(submit); 
    form.appendChild(deleteToDo); 
    form.appendChild(cancel); 

    formDiv.appendChild(intro); 
    formDiv.appendChild(form);
    formDiv.id = "toDoForm"; 

    main.appendChild(formDiv); 
}

function updateDisplay() {
    const projectDiv = document.querySelector("#projectList"); 
    showProjectList(); 
    projectDiv.innerHTML = ""; 
    
    const intro = document.createElement("h2"); 
    intro.textContent = "Project List"; 
    projectDiv.appendChild(intro); 

    if (projectManager.getProjects().length === 0) {
        const instructions = document.createElement("p"); 
        instructions.textContent = "Click +Project to add your first project!"; 
        projectDiv.appendChild(instructions); 
    }

    projectManager.getProjects().forEach(project => {
        const div = document.createElement("div"); 
        div.classList.add("project-display"); 
        
        const projectHeader = document.createElement("div"); 
        projectHeader.classList.add("project-header"); 
        const projectName = document.createElement("h3"); 
        projectName.textContent = project.getName();
        projectHeader.appendChild(projectName); 


        const deleteProject = document.createElement("button"); 
        deleteProject.textContent = "Delete Project";
        deleteProject.classList.add("ghost-button"); 
        deleteProject.addEventListener('click', (event) => {
            event.preventDefault();
            if (confirm("Are you sure you want to delete this project?")) {
                projectManager.deleteProject(project); 
            }
            updateDisplay(); 
        });
        projectHeader.appendChild(deleteProject); 
        div.appendChild(projectHeader); 

        project.getProjectToDos().forEach(toDo => {
            const toDoDiv = document.createElement("div"); 
            toDoDiv.classList.add("toDo-display"); 
            
            const p = document.createElement("p"); 
            p.textContent = toDo.getTitle();

            toDoDiv.appendChild(p);

            const editToDo = document.createElement("button"); 
            editToDo.classList.add("ghost-button");
            editToDo.textContent = "Edit"
            editToDo.addEventListener("click", (event) => {
                showToDoDetails(project, toDo); 
            })
            toDoDiv.appendChild(editToDo); 

            div.appendChild(toDoDiv); 
        });        
        
        const addToDo = document.createElement("button");
        addToDo.addEventListener('click', (event) => {
            event.preventDefault(); 
            createToDoForm(project); 
        });  
        addToDo.textContent = "+ Todo"; 
        div.appendChild(addToDo); 

        projectDiv.appendChild(div); 
    }); 
}

function projectDisplay() {
    const projectDiv = document.createElement("div"); 
    projectDiv.id = "projectList"; 
    return projectDiv; 
}

function createToDoForm(project) {
    const projectList = document.querySelector("#projectList");    
    const projectForm = document.querySelector("#projectForm"); 
    
    if (!projectList.classList.contains('hidden')) {
        projectList.classList.add('hidden'); 
    }
    if (!projectForm.classList.contains('hidden')) {
        projectForm.classList.add('hidden'); 
    }
    toDoForm(project); 
}

function showProjectList() {
    const projectList = document.querySelector("#projectList");    
    const projectForm = document.querySelector("#projectForm"); 
    
    if (projectList.classList.contains('hidden')) {
        projectList.classList.remove('hidden'); 
    }
    if (!projectForm.classList.contains('hidden')) {
        projectForm.classList.add('hidden'); 
    }
}

function showProjectForm() {
    const projectList = document.querySelector("#projectList");    
    const projectForm = document.querySelector("#projectForm"); 
    
    if (!projectList.classList.contains('hidden')) {
        projectList.classList.add('hidden'); 
    }
    if (projectForm.classList.contains('hidden')) {
        projectForm.classList.remove('hidden'); 
    }
}

function projectForm() {
    const projectDiv = document.createElement("div"); 

    const intro = document.createElement("h2"); 
    intro.textContent = "Add a new project"; 
    
    const form = document.createElement("form");

    const title = document.createElement("input"); 
    title.type = "text"; 
    title.placeholder = "Project Name"; 
    title.id = "projectName"; 

    const submit = document.createElement("button"); 
    submit.textContent = "Submit"; 
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector("#projectName").value; 
        projectManager.createProject(name); 
        document.querySelector("#projectForm").classList.add("hidden"); 
        updateDisplay(); 
    });

    const cancel = document.createElement("button"); 
    cancel.classList.add('ghost-button'); 
    cancel.textContent = "Cancel"; 
    cancel.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector("#projectName").value = ""; 
        showProjectList(); 
    });

    form.appendChild(title); 
    form.appendChild(submit); 
    form.appendChild(cancel);

    projectDiv.appendChild(intro); 
    projectDiv.appendChild(form);
    projectDiv.classList.add('hidden'); 
    projectDiv.id = "projectForm"; 

    return projectDiv; 
}

function loadHeader() {
    const header = document.createElement("header");
    
    const name = document.createElement("h1");
    name.textContent = "To Do List";
  
    header.appendChild(name);

    // add nav TODO: onclicks bugged
    const nav = document.createElement("nav"); 
       
    const addProject = document.createElement("button"); 
    addProject.addEventListener('click', (event) => {
        event.preventDefault();
        showProjectForm(); 
    });
    addProject.textContent = "+ Project"; 
    
    nav.appendChild(addProject); 

    header.appendChild(nav); 

    return header;
  }

function loadMain() {
    return document.createElement("main");
}

function loadFooter() {
    const footer = document.createElement("footer"); 
    const div = document.createElement("div"); 
    div.innerHTML = '<p>Copyright © <a href="https://www.github.com/jdelles">James Delles</a> 2021</p>'; 

    footer.appendChild(div); 

    return footer; 
}

function load() {
    const content = document.getElementById("content");
    content.appendChild(loadHeader()); 
    const main = content.appendChild(loadMain()); 
    // main.appendChild(toDoForm()); 
    main.appendChild(projectForm()); 
    main.appendChild(projectDisplay()); 
    content.appendChild(loadFooter()); 
    updateDisplay(); 
  }
 
  export default load; 