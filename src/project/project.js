export class Project {
    constructor(projectName) {
        this.projectName = projectName; 
        this.projectToDos = []; 
        this.active = true; 
    }

    get projectName() {
        return this.projectName; 
    }

    get projectToDos() {
        return this.projectToDos; 
    }

    set projectToDos(todo) {
        this.projectToDos.push(todo); 
    }

    get active() {
        return this.active; 
    }

    set active(state) {
        this.active = state; 
    }
}