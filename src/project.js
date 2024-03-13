export let projectList = [];
let projectId = 0

class Project {
    constructor(title, id, description) {
        this.title = title
        this.id = id
        this.description = description
        this.listOfTasks = []
    }

    updateProject(newTitle, newDescription) {
        this.title = newTitle
        this.description = newDescription
    }
    addTaskToProject(task) {
        this.listOfTasks.push(task)
    }
    getTasks() {
        return this.listOfTasks
    }

    getProjectTitle() {
        return this.title
    }

    getProjectDescription() {
        return this.description
    }
    getProjectId() {
        return this.id
    }
}

// create new project category
export function createNewProject(title, description) {
    let newProject = new Project(title, projectId, description)
    incrementProjectId()
    addProjectToProjectList(newProject)
    return newProject
}

function incrementProjectId() {
    projectId += 1
}

// delete project from projectList
export function deleteProject(id) {
    for (let i = 0; i < projectList.length; i++) {

        if (projectList[i].id === parseInt(id)) {
            projectList.splice(i, 1)
        }
    }

}

// push project to project list 
function addProjectToProjectList(project) {
    projectList.push(project)
}



