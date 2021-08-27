import createTodo from './todos/todos.js'; 

const project = (name) => {
    let todos = new Map(); 
    let todosKeys = new Array(); 

    const addTodoToProject = (title, description, date, priority) => {
        if (validateTitle()) {
            const todo = createTodo(title, description, date, priority); 
            todos.set(title, todo);
            todosKeys.push(title);  
        } else {
            alert("ToDos must have a unique name"); 
        }
    }

    const removeTodoFromProject = (title) => {
        todos.delete(title); 
        const index = todosKeys.indexOf(title); 
        if (index > -1) {
            todosKeys.splice(index, 1); 
        }
    }

    const validateTitle = (title) => {
        return !todos.has(title); 
    }

    const getToDos = () => {
        return todos; 
    }

    return {name, getToDos, addTodoToProject, removeTodoFromProject}; 
}

export default project; 