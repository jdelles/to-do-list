export default class Project {
    constructor(name) {
        this.projectName = name; 
        this.projectToDos = []; 
        this.active = true; 
    }

    getName() {
        return this.projectName; 
    }

    addToDo(todo) {
        this.projectToDos.push(todo); 
    }

    removeToDo(todo) {
        const index = this.projectToDos.indexOf(todo); 
        if (index > -1) {
            this.projectToDos.splice(index, 1); 
        }
    }

    setActive(state) {
        this.active = state; 
    }
}