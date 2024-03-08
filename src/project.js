export let projectList = [];
let projectId = 0

class Project {
    constructor(title, id) {
        this.title = title
        this.id = id
        this.listOfTasks = []
    }

    editProjectTitle(newTitle) {
        this.title = newTitle
    }
    addTaskToProject(task) {
        this.listOfTasks.push(task)
    }
    get tasks() {
        return this.listOfTasks
    }
}

// create new project category
export function createNewProject(title) {
    let newProject = new Project(title, projectId)
    incrementProjectId()
    addProjectToProjectList(newProject)
}

function incrementProjectId() {
    projectId += 1
}

function deleteProject(title) {

}

// push project to project list 
function addProjectToProjectList(project) {
    projectList.push(project)
}



