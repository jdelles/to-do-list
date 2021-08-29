import project from '../project/project.js';
import projectManager from '../toDoManager/toDoManager.js'; 

function toDoForm() {
    const formDiv = document.createElement("div"); 

    const intro = document.createElement("h2"); 
    intro.textContent = "Add a new to do"; 
    
    const form = document.createElement("form");

    const title = document.createElement("input"); 
    title.type = "text"; 
    title.placeholder = "Title"; 

    const description = document.createElement("input"); 
    description.type = "text"; 
    description.placeholder = "Description"; 

    const priority = document.createElement("input"); 
    priority.type = "text"; 
    priority.placeholder = "Priority"; 

    const date = document.createElement("input"); 
    date.type = "text"; 
    date.placeholder = "Date"; 

    const submit = document.createElement("button"); 
    submit.textContent = "Submit"; 
    submit.addEventListener('click', (event) => {
        event.preventDefault();
    });


    const cancel = document.createElement("button"); 
    cancel.classList.add('ghost-button'); 
    cancel.textContent = "Cancel"; 
    cancel.addEventListener('click', (event) => {
        event.preventDefault();
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

    const submit = document.createElement("button"); 
    submit.textContent = "Submit"; 
    submit.addEventListener('click', (event) => {
        event.preventDefault();
    });

    const cancel = document.createElement("button"); 
    cancel.classList.add('ghost-button'); 
    cancel.textContent = "Cancel"; 
    cancel.addEventListener('click', (event) => {
        event.preventDefault();
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
    
    const addToDo = document.createElement("button");
    addToDo.addEventListener('click', (event) => {
        event.preventDefault();
        const form = document.getElementById('toDoForm'); 
        form.classList.remove('hidden'); 
        projectManager.addTodoToSpecifiedProject(title, description, date, priority, projectName); 
    });  
    addToDo.textContent = "+ Todo"; 
    
    const addProject = document.createElement("button"); 
    addProject.addEventListener('click', (event) => {
        event.preventDefault();
        const form = document.getElementById('projectForm'); 
        form.classList.remove('hidden'); 
        projectManager.createProject(name); 
    });
    addProject.textContent = "+ Project"; 
    
    nav.appendChild(addToDo);
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
    content.appendChild(loadFooter()); 
  }
 
  export default load; 