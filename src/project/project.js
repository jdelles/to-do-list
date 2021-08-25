const project = (name) => {
    let todos = new Map(); 

    const addTodo = (name, todo) => {
        todos.set(name, todo); 
    }

    const removeTodo = (name) => {
        todos.delete(name); 
    }

    return {name, addTodo, removeTodo}; 
}

