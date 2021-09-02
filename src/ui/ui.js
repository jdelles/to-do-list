import projectManager from '../toDoManager/toDoManager.js'; 

function updateDisplay() {
    const projectDiv = document.querySelector("#projectList"); 
    showProjectList(); 
    projectDiv.innerHTML = ""; 
    
    const intro = document.createElement("h2"); 
    intro.textContent = "Project List"; 
    projectDiv.appendChild(intro); 

    projectManager.getProjects().forEach(project => {
        const div = document.createElement("div"); 
        div.classList.add("project-display"); 
        
        const p = document.createElement("p"); 
        p.textContent = project.getName();

        const deleteProject = document.createElement("button"); 
        deleteProject.textContent = "- Project";
        deleteProject.classList.add("ghost-button"); 
        deleteProject.addEventListener('click', (event) => {
            event.preventDefault();
            projectManager.deleteProject(project); 
            updateDisplay(); 
        });

        const addToDo = document.createElement("button");
        addToDo.addEventListener('click', (event) => {
            event.preventDefault();
            const form = document.getElementById('toDoForm'); 
            showToDoForm(); 
        });  
        addToDo.textContent = "+ Todo"; 

        div.appendChild(p); 
        div.appendChild(deleteProject); 
        div.appendChild(addToDo); 
        projectDiv.appendChild(div); 
    }); 
}

function projectDisplay() {
    const projectDiv = document.createElement("div"); 
    projectDiv.id = "projectList"; 
    return projectDiv; 
}

function showToDoForm() {
    const projectList = document.querySelector("#projectList");    
    const projectForm = document.querySelector("#projectForm"); 
    const toDoForm = document.querySelector("#toDoForm"); 
    
    if (!projectList.classList.contains('hidden')) {
        projectList.classList.add('hidden'); 
    }
    if (toDoForm.classList.contains('hidden')) {
        toDoForm.classList.remove('hidden'); 
    }
    if (!projectForm.classList.contains('hidden')) {
        projectForm.classList.add('hidden'); 
    }
}

function showProjectList() {
    const projectList = document.querySelector("#projectList");    
    const projectForm = document.querySelector("#projectForm"); 
    const toDoForm = document.querySelector("#toDoForm"); 
    
    if (projectList.classList.contains('hidden')) {
        projectList.classList.remove('hidden'); 
    }
    if (!toDoForm.classList.contains('hidden')) {
        toDoForm.classList.add('hidden'); 
    }
    if (!projectForm.classList.contains('hidden')) {
        projectForm.classList.add('hidden'); 
    }
}

function showProjectForm() {
    const projectList = document.querySelector("#projectList");    
    const projectForm = document.querySelector("#projectForm"); 
    const toDoForm = document.querySelector("#toDoForm"); 
    
    if (!projectList.classList.contains('hidden')) {
        projectList.classList.add('hidden'); 
    }
    if (!toDoForm.classList.contains('hidden')) {
        toDoForm.classList.add('hidden'); 
    }
    if (projectForm.classList.contains('hidden')) {
        projectForm.classList.remove('hidden'); 
    }
}

function toDoForm() {
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
    });

    const cancel = document.createElement("button"); 
    cancel.classList.add('ghost-button'); 
    cancel.textContent = "Cancel"; 
    cancel.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector("#title").value = ""; 
        document.querySelector("#description").value = ""; 
        document.querySelector("#priority").value = ""; 
        document.querySelector("#date").value = ""; 
        showProjectList(); 
    });

    form.appendChild(title); 
    form.appendChild(description);
    form.appendChild(priority);
    form.appendChild(date);
    form.appendChild(submit); 
    form.appendChild(cancel); 

    formDiv.appendChild(intro); 
    formDiv.appendChild(form);
    formDiv.classList.add('hidden'); 
    formDiv.id = "toDoForm"; 

    return formDiv; 
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
    main.appendChild(toDoForm()); 
    main.appendChild(projectForm()); 
    main.appendChild(projectDisplay()); 
    content.appendChild(loadFooter()); 
  }
 
  export default load; 