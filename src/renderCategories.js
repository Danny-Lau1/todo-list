import { projectList } from "./project";
import { contentContainer } from "./buildProjectScreen";
import { returnProjectInstance } from "./dom";

// holds only the tasks that will be rendered based on the side bar button pressed
const renderTaskArray = []

// render important projects
export function renderImportant() {
    clearRenderArray()
    projectList.forEach((project) => {
        project.listOfTasks.forEach((task) => {
            if (task.priority === "high-priority")
                renderTaskArray.push(task)
        })
    })

    buildCategoryProject("Important")
}


// render completed projectes
export function renderCompleted() {
    clearRenderArray()
    projectList.forEach((project) => {
        project.listOfTasks.forEach((task) => {
            if (task.completed === true)
                renderTaskArray.push(task)
        })
    })
    buildCategoryProject("Completed")
}

export function buildCategoryProject(titleOfCategory) {

    contentContainer.innerHTML = ""

    // build the header and the column headers
    const categoryHeaderSection = document.createElement("section")
    const categoryTitle = document.createElement("h1")
    categoryTitle.textContent = titleOfCategory
    const columnHeader = document.createElement("section")
    columnHeader.id = "column-header"
    const titleHeader = document.createElement("h4")
    titleHeader.textContent = "Task"
    const dateAndProjectHeader = document.createElement("div")
    dateAndProjectHeader.id = "date-and-project-header"
    const dateHeader = document.createElement("h4")
    dateHeader.textContent = "Due Date"
    const projectHeader = document.createElement("h4")
    projectHeader.textContent = "Project"

    // build the page
    categoryHeaderSection.appendChild(categoryTitle)
    contentContainer.appendChild(categoryHeaderSection)
    columnHeader.appendChild(titleHeader)
    columnHeader.appendChild(dateAndProjectHeader)
    dateAndProjectHeader.appendChild(dateHeader)
    dateAndProjectHeader.appendChild(projectHeader)

    contentContainer.appendChild(columnHeader)

    const taskSection = document.createElement("section")
    taskSection.id = "task-section"

    renderTaskArray.forEach(task => {
        const taskRow = document.createElement("div")
        taskRow.id = "task-row"

        // obtain the projectid and the project instance
        const projectId = task.getTaskProjectId()
        const project = returnProjectInstance(projectId)

        // create the task title and checkbox
        const checkboxAndTitleDiv = document.createElement("div")
        checkboxAndTitleDiv.id = "checkbox-and-title-div"
        const checkboxInput = document.createElement('input')
        checkboxInput.type = "checkbox"
        checkboxInput.dataset.projectId = project.getProjectId()
        checkboxInput.dataset.taskId = task.id

        if (task.completed === true) {
            checkboxInput.checked = true
        }

        const projectTitle = document.createElement("h3")
        projectTitle.textContent = project.getProjectTitle()
        const individualTaskTitle = document.createElement("h3")
        individualTaskTitle.textContent = task.title
        const taskDueDate = document.createElement("h3")
        taskDueDate.textContent = task.dueDate
        const dateAndTitleDiv = document.createElement("div")

        // build the page
        dateAndTitleDiv.id = "date-and-title-div"
        dateAndTitleDiv.appendChild(taskDueDate)
        dateAndTitleDiv.appendChild(projectTitle)
        checkboxAndTitleDiv.appendChild(checkboxInput)
        checkboxAndTitleDiv.appendChild(individualTaskTitle)
        taskRow.appendChild(checkboxAndTitleDiv)
        taskRow.appendChild(dateAndTitleDiv)
        taskSection.appendChild(taskRow)
    })

    contentContainer.appendChild(taskSection)
}



function clearRenderArray() {
    renderTaskArray.length = 0
}