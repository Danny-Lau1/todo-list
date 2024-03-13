let taskId = 0

class Task {
    constructor(title, dueDate, priority, id, projectId) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority
        this.id = id
        this.projectId = projectId
    }
}

export function createNewTask(title, dueDate, priority, projectId) {
    let newTask = new Task(title, dueDate, priority, taskId, projectId)
    incrementTaskId()
    console.log(newTask)
    return newTask
}

export function deleteTask(projectInstance, Id) {
    const projectListOfTasks = projectInstance.getTasks()
    console.log(`1. TASK ID IS ${Id}`)
    console.log(projectListOfTasks)
    for (let i = 0; i < projectListOfTasks.length; i++) {
        if (projectListOfTasks[i].id === parseInt(Id)) {
            projectListOfTasks.splice(i, 1)
        }
    }
}

function incrementTaskId() {
    taskId += 1
}

