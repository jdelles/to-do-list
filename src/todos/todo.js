export default class ToDo {
    constructor(title, description, date, priority) {
        this.title = title; 
        this.description = description; 
        this.date = date; 
        this.priority = priority; 
    }

    get title() {
        return this.title; 
    }

    set title(title) {
        this.title = title; 
    }

    get description() {
        return this.description; 
    }

    set description(description) {
        this.description = description; 
    }

    get date() {
        return this.date; 
    }

    set date(date) {
        this.date = date; 
    }

    get priority() {
        return this.priority; 
    }

    set priority(priority) {
        this.priority = priority; 
    }
}