import { projectList, createNewProject, deleteProject } from "./project.js"

const addProjectBtn = document.getElementById("add-project")
const projectModal = document.getElementById("create-project-modal")
const cancelProjectBtn = document.getElementById("cancel-project-btn")
const projectForm = document.getElementById("create-project-form")
const sidebarProjectList = document.getElementById("project-list")
const contentContainer = document.getElementById("content")


addProjectBtn.addEventListener("click", () => {
    projectModal.showModal()
})

cancelProjectBtn.addEventListener("click", (event) => {
    event.preventDefault()
    projectModal.close()
})

// get the project title from user and call createNewProject from project.js
function addProjects(event) {
    event.preventDefault()
    let projectTitle = document.getElementById("project-title").value
    const projectInstance = createNewProject(projectTitle)
    return projectInstance
}

// after user enters a new project -> update sidebar and bring up new project
projectForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const projectTitle = document.getElementById("project-title").value;
    const projectId = projectForm.dataset.id;
    let projectInstance;

    // if a projectId already exists in editing form
    if (projectId) {
        console.log("FOUND")
        projectInstance = projectList.find(project => project.id === parseInt(projectId));
        editProject(projectInstance, projectTitle)
    }
    // if projectId does not exist, create a new project
    else {
        projectInstance = addProjects(event)
    }

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

function updateProjectScreen(project) {
    contentContainer.innerHTML = ""

    // create title
    const projectHeaderSection = document.createElement("section")
    projectHeaderSection.className = "project-header"
    const projectTitle = document.createElement("h2")
    projectTitle.textContent = project.getProjectTitle()


    // create edit and delete buttons
    // attach the project's id property to it edit and delete button
    const editProjectBtn = document.createElement("button")
    editProjectBtn.textContent = "Edit"
    editProjectBtn.dataset.id = project.getProjectId()

    const deleteProjectBtn = document.createElement("button")
    deleteProjectBtn.textContent = "Delete"
    deleteProjectBtn.dataset.id = project.getProjectId()


    // add individual project data
    contentContainer.appendChild(projectHeaderSection)
    projectHeaderSection.appendChild(projectTitle)
    projectHeaderSection.appendChild(editProjectBtn)
    projectHeaderSection.appendChild(deleteProjectBtn)

}

contentContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {

        const button = event.target
        const projectId = button.dataset.id

        // Bring up the filled out project form
        // assign the projectId to the dataset.id of the project form
        if (button.textContent === "Edit") {
            // Implement edit project functionality
            populateEditForm(projectId)
            projectForm.dataset.id = projectId
            projectModal.showModal();

        }

        // Check if the clicked button is a delete button
        if (button.textContent === "Delete") {
            // Implement delete project functionality
            removeProject(projectId)

        }
    }
});

function populateEditForm(projectId) {
    const project = (projectList.find(project => project.id === parseInt(projectId)));
    const projectTitleInput = document.getElementById("project-title");
    projectTitleInput.value = project.title;

}

function editProject(projectInstance, projectTitle) {
    projectInstance.updateProject(projectTitle)
}

function removeProject(projectId) {
    deleteProject(projectId)
    updateSideBar()
}



export * from "./dom.js"