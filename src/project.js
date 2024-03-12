export let projectList = [];
let projectId = 0

class Project {
    constructor(title, id) {
        this.title = title
        this.id = id
        this.listOfTasks = []
    }

    updateProject(newTitle) {
        this.title = newTitle
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
    getProjectId() {
        return this.id
    }
}

// create new project category
export function createNewProject(title) {
    let newProject = new Project(title, projectId)
    incrementProjectId()
    addProjectToProjectList(newProject)
    return newProject
}

function incrementProjectId() {
    projectId += 1
}

export function deleteProject(id) {
    for (let i = 0; i < projectList.length; i++) {

        if (projectList[i].id === parseInt(id)) {
            projectList.splice(i, 1)
        }
    }

}



// function editProject(id) {
//     for (let i = 0; i < projectList.length; i++) {

//         if (projectList[i].id === parseInt(id)) {
//             projectList[i].editProject()
//         }
//     }

// }

// push project to project list 
function addProjectToProjectList(project) {
    projectList.push(project)
}



