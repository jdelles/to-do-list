import createTodo from './todos/todos.js'; 

const project = (name) => {
    let todos = new Map(); 

    const addTodo = (title, description, date, priority) => {
        if (validateTitle()) {
            const todo = createTodo(title, description, date, priority); 
            todos.set(title, todo); 
        } else {
            alert("ToDos must have a unique name"); 
        }
    }

    const removeTodo = (title) => {
        todos.delete(name); 
    }

    const validateTitle = (title) => {
        if (todos.get(title) === undefined) {
            return true; 
        } else {
            return false; 
        }; 
    }

    return {name, addTodo, removeTodo}; 
}