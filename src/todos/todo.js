export default class ToDo {
    constructor(title, description, date, priority) {
        this.title = title; 
        this.description = description; 
        this.date = date; 
        this.priority = priority; 
    }

    getTitle() {
        return this.title; 
    }

    getDescription() {
        return this.description;
    }

    getPriority() {
        return this.priority;
    }

    getDate() {
        return this.date; 
    }
}