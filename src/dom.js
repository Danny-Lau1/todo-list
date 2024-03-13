import { projectList, createNewProject, deleteProject } from "./project.js"
import { createNewTask, deleteTask } from "./task.js"
import { contentContainer, taskForm, updateProjectScreen } from "./buildProjectScreen.js"


const addProjectBtn = document.getElementById("add-project")
const projectModal = document.getElementById("create-project-modal")
const cancelProjectBtn = document.getElementById("cancel-project-btn")
const projectForm = document.getElementById("create-project-form")
const sidebarProjectList = document.getElementById("project-list")
const taskModal = document.getElementById("create-task-modal")
const cancelTaskBtn = document.getElementById("cancel-task-btn")
const highPriorityRadio = document.getElementById("high-priority");
const lowPriorityRadio = document.getElementById("low-priority");


// open up project modal 
addProjectBtn.addEventListener("click", () => {
    projectModal.showModal()
})


// close project modal by cancelling
cancelProjectBtn.addEventListener("click", (event) => {
    event.preventDefault()
    projectModal.close()
})


//close task modal by cancelling
cancelTaskBtn.addEventListener("click", (event) => {
    event.preventDefault()
    taskModal.close()
})


// get the project title from user and call createNewProject from project.js
function addProjects(event) {
    event.preventDefault()
    let projectTitle = document.getElementById("project-title").value
    let projectDescription = document.getElementById("project-description").value
    const projectInstance = createNewProject(projectTitle, projectDescription)
    return projectInstance
}


// after user enters a new project -> update sidebar and bring up new project
projectForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const projectId = projectForm.dataset.id;
    let projectInstance;

    // if a projectId already exists in editing form's html
    if (projectId) {
        const projectTitle = document.getElementById("project-title").value;
        const projectDescription = document.getElementById("project-description").value
        projectInstance = returnProjectInstance(projectId);
        editProject(projectInstance, projectTitle, projectDescription)
    }
    // if projectId does not exist, create a new project
    else {
        projectInstance = addProjects(event)
    }

    // reset the project form's html id, update sidebar, update project screen
    // reset project form inputs, close project modal
    projectForm.dataset.id = ""
    updateProjectScreen(projectInstance)
    updateSideBar()
    projectForm.reset()
    projectModal.close()

    console.log(projectList)
})


// adds new projects to the side bar
// creates sidebar button and maps object's projectId to the buttons dataset.id
function updateSideBar() {
    sidebarProjectList.innerHTML = ""
    projectList.forEach((project) => {
        const individualProjectBtn = document.createElement("button")
        individualProjectBtn.textContent = project.title
        individualProjectBtn.dataset.id = project.getProjectId()
        sidebarProjectList.appendChild(individualProjectBtn)
    })
}


// Bring up the selected project from the sidebar to the content screen
sidebarProjectList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const projectId = event.target.dataset.id;
        const project = projectList.find(project => project.id === parseInt(projectId));
        updateProjectScreen(project)
    }
});


contentContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {

        const button = event.target
        const projectId = button.dataset.id

        // Bring up the filled out project form
        // assign the projectId to the dataset.id of the project form
        if (button.textContent === "Edit Project") {
            // Implement edit project functionality
            populateEditForm(projectId)
            projectForm.dataset.id = projectId
            projectModal.showModal();

        }

        // Check if the clicked button is a delete button
        if (button.textContent === "Delete Project") {
            // Implement delete project functionality
            removeProject(projectId)

        }

        if (button.textContent === "Create Task") {
            taskModal.showModal()
            openTaskModal()
        }

        if (button.textContent === "Delete Task") {
            const taskId = button.dataset.id

            removeTask(projectId, taskId)
        }
    }
});


function removeTask(projectId, taskId) {
    const projectInstance = returnProjectInstance(projectId)
    if (projectInstance) {
        deleteTask(projectInstance, taskId);
        updateProjectScreen(projectInstance);
        console.log(projectList);
    } else {
        console.error(`Project with ID ${projectId} not found.`);
    }

}


// brings up an existing project's form to edit content
function populateEditForm(projectId) {
    const project = (projectList.find(project => project.id === parseInt(projectId)));
    const projectTitleInput = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description")
    projectTitleInput.value = project.getProjectTitle();
    projectDescription.value = project.getProjectDescription()
}


function openTaskModal() {
    console.log(`HERE ${taskForm.dataset.id}`)
    taskModal.showModal()
}


taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const projectId = taskForm.dataset.id
    // capture information from form
    const taskTitle = document.getElementById("task-title").value
    const taskDueDate = document.getElementById("due-date").value
    const taskPriority = function () {
        if (highPriorityRadio.checked) {
            return highPriorityRadio.value
        }
        else if (lowPriorityRadio.checked) {
            return lowPriorityRadio.value
        }
    }()
    const taskInstance = createNewTask(taskTitle, taskDueDate, taskPriority, projectId)

    // add the new task to the project instance
    const projectInstance = returnProjectInstance(projectId)
    projectInstance.addTaskToProject(taskInstance)
    taskForm.reset()
    taskModal.close()
    console.log(projectList)
    updateProjectScreen(projectInstance)
})


function returnProjectInstance(projectId) {
    const projectInstance = projectList.find(project => project.id === parseInt(projectId));
    return projectInstance
}


function editProject(projectInstance, projectTitle, projectDescription) {
    projectInstance.updateProject(projectTitle, projectDescription)
}


function removeProject(projectId) {
    deleteProject(projectId)
    updateSideBar()
}


export * from "./dom.js"