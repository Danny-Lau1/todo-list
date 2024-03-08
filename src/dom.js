import { projectList, createNewProject } from "./project.js"

const addProjectBtn = document.getElementById("add-project")
const projectModal = document.getElementById("create-project-modal")
const confirmProjectBtn = document.getElementById("confirm-project-btn")
const cancelProjectBtn = document.getElementById("cancel-project-btn")
const projectForm = document.getElementById("create-project-form")
const sidebarProjectList = document.getElementById("project-list")

addProjectBtn.addEventListener("click", () => {
    projectModal.showModal()
})

cancelProjectBtn.addEventListener("click", () => {
    projectModal.close()
})

// get the project title from user and call createNewProject from project.js
function addProjects(event) {
    event.preventDefault()
    let projectTitle = document.getElementById("project-title").value
    createNewProject(projectTitle)
}

// after user enters a new project and clicks
projectForm.addEventListener("submit", (event) => {
    addProjects(event)
    projectForm.reset()
    console.log(projectList)
    console.log(typeof (projectList[0]))
    updateSideBar()
    projectModal.close()
})



// adds new projects to the side bar
function updateSideBar() {
    sidebarProjectList.innerHTML = ""
    projectList.forEach((project) => {
        const individualProjectBtn = document.createElement("button")
        individualProjectBtn.textContent = project.title
        sidebarProjectList.appendChild(individualProjectBtn)
    })
}




export * from "./dom.js"