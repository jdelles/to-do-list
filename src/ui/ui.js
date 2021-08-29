import project from '../project/project.js';
import projectManager from '../toDoManager/toDoManager.js'; 

function toDoForm() {
    const main = document.querySelector("main"); 
    main.innerHTML = ""; 
    const formDiv = document.createElement("div"); 

    const intro = document.createElement("h2"); 
    intro.textContent = "Add a to do item"; 
    
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
    date.placeholder = "date"; 

    const submit = document.createElement("button"); 
    submit.textContent = "Submit"; 

    form.appendChild(title); 
    form.appendChild(description);
    form.appendChild(priority);
    form.appendChild(date);
    form.appendChild(submit); 

    formDiv.appendChild(intro); 
    formDiv.appendChild(form);
    // formDiv.classList.add('hidden'); 
    formDiv.id = "toDoForm"; 

    main.appendChild(formDiv); 
}

function projectForm() {
    const main = document.querySelector("main"); 
    main.innerHTML = ""; 
    const projectDiv = document.createElement("div"); 

    const intro = document.createElement("h2"); 
    intro.textContent = "Add a new project"; 
    
    const form = document.createElement("form");

    const title = document.createElement("input"); 
    title.type = "text"; 
    title.placeholder = "Project Name"; 

    const submit = document.createElement("button"); 
    submit.textContent = "Submit"; 

    form.appendChild(title); 
    form.appendChild(submit); 

    projectDiv.appendChild(intro); 
    projectDiv.appendChild(form);
    // formDiv.classList.add('hidden'); 
    projectDiv.id = "projectForm"; 

    main.appendChild(projectDiv); 
}

function loadHeader() {
    const header = document.createElement("header");
    
    const name = document.createElement("h1");
    name.textContent = "To Do List";
  
    header.appendChild(name);

    // add nav TODO: onclicks bugged
    const nav = document.createElement("nav"); 
    
    const addToDo = document.createElement("button");
    addToDo.addEventListener("click", () => {
        projectManager.addTodoToSpecifiedProject(title, description, date, priority, projectName); 
    });  
    addToDo.textContent = "+ Todo"; 
    
    const addProject = document.createElement("button"); 
    addProject.addEventListener("click", () => {
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
    content.appendChild(loadMain()); 
    content.appendChild(loadFooter()); 
    toDoForm(); 
    projectForm(); 
  }
 
  export default load; 