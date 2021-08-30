import projectManager from '../toDoManager/toDoManager.js'; 
import createTodo from '../todos/todo.js'; 

let todoTest = []; 

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
        todoTest.push(createTodo(title, description, priority, date)); 
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
        document.querySelector("#toDoForm").classList.add("hidden"); 
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
        const name = document.querySelector("#projectName"); 
        projectManager.createProject(name); 
    });

    const cancel = document.createElement("button"); 
    cancel.classList.add('ghost-button'); 
    cancel.textContent = "Cancel"; 
    cancel.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector("#projectName").value = ""; 
        document.querySelector("#projectForm").classList.add("hidden"); 
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

        if (form.classList.contains('hidden')) {
            const projectForm = document.getElementById('projectForm'); 
            if (!projectForm.classList.contains('hidden')) {
                projectForm.classList.add('hidden'); 
            }
            form.classList.remove('hidden'); 
        } else {
            form.classList.add('hidden'); 
        }
    });  
    addToDo.textContent = "+ Todo"; 
    
    const addProject = document.createElement("button"); 
    addProject.addEventListener('click', (event) => {
        event.preventDefault();
        const form = document.getElementById('projectForm'); 
        if (form.classList.contains('hidden')) {
            const toDoForm = document.getElementById('toDoForm'); 
            if (!toDoForm.classList.contains('hidden')) {
                toDoForm.classList.add('hidden'); 
            }
            form.classList.remove('hidden'); 
        } else {
            form.classList.add('hidden'); 
        }
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
 
  export {todoTest, load}; 