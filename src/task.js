class Task {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority
        this.project = project
    }
}


function createTask(title, description, dueDate, priority, project) {
    newTask = new Task(title, description, dueDate, priority, project)
}

