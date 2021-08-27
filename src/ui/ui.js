import projectManager from '../toDoManager/toDoManager.js'; 

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
  }
 
  export default load; 