export const contentContainer = document.getElementById("content")
export const taskForm = document.getElementById("create-task-form")

export function updateProjectScreen(project, selectedPriority) {
    contentContainer.innerHTML = ""

    // create title
    const projectHeaderSection = document.createElement("section")
    projectHeaderSection.className = "project-header"
    const projectTitle = document.createElement("h2")
    projectTitle.textContent = project.getProjectTitle()
    const projectDescription = document.createElement("p")
    projectDescription.textContent = project.getProjectDescription()

    // create edit and delete buttons
    // attach the project's id property to it edit and delete button
    const editAndDeleteDiv = document.createElement('div')
    editAndDeleteDiv.className = "project-button-div"

    const editProjectBtn = document.createElement("button")
    editProjectBtn.textContent = "Edit Project"
    editProjectBtn.dataset.projectId = project.getProjectId()

    const deleteProjectBtn = document.createElement("button")
    deleteProjectBtn.textContent = "Delete Project"
    deleteProjectBtn.dataset.projectId = project.getProjectId()

    // create task button
    const createAndFilterSection = document.createElement("section")
    createAndFilterSection.id = "create-and-filter-section"
    const createAndFilterDiv = document.createElement("div")
    const createTaskBtn = document.createElement("button")
    createTaskBtn.textContent = "Create Task"

    // link the task form with the projectId to put tasks in their respective projects
    taskForm.dataset.projectId = project.getProjectId()

    // create filter dropdown
    const priorityLabel = document.createElement("label")
    priorityLabel.textContent = "Filter By Priority: "
    priorityLabel.setAttribute("for", "selected-priority")
    const selectPriority = document.createElement("select")
    selectPriority.id = "selected-priority"
    selectPriority.setAttribute("name", "selected-priority")
    selectPriority.dataset.projectId = project.getProjectId()
    const priorityAll = document.createElement("option")
    priorityAll.textContent = "All"
    priorityAll.value = "all"
    const priorityHigh = document.createElement("option")
    priorityHigh.id = "high-priority"
    priorityHigh.textContent = "High Priority"
    priorityHigh.value = "high-priority"
    const priorityLow = document.createElement("option")
    priorityLow.textContent = "Low Priority"
    priorityLow.value = "low-priority"

    // add labels for tasks

    const taskHeaders = document.createElement("section")
    taskHeaders.id = "task-header"
    const taskColumn = document.createElement("h4")
    taskColumn.textContent = "Task"
    const headerDiv = document.createElement("div")
    headerDiv.id = "task-header-div"
    const fillerOne = document.createElement("button")
    fillerOne.textContent = "Edit Task"

    const fillerTwo = document.createElement("button")
    fillerTwo.textContent = "Delete Task"
    const taskDueDateHeader = document.createElement("h4")
    taskDueDateHeader.textContent = "Due Date"

    headerDiv.appendChild(taskDueDateHeader)
    headerDiv.appendChild(fillerOne)
    headerDiv.appendChild(fillerTwo)
    taskHeaders.appendChild(taskColumn)
    taskHeaders.appendChild(headerDiv)

    // display all of a project's task

    const taskSection = document.createElement("section")
    taskSection.id = "task-section"
    let projectTasks = project.getTasks()

    if (selectedPriority == "high-priority") {
        priorityHigh.selected = true
        projectTasks = projectTasks.filter(task => task.getPriority() === "high-priority")
    }

    else if (selectedPriority == "low-priority") {
        priorityLow.selected = true
        projectTasks = projectTasks.filter(task => task.getPriority() === "low-priority")
    }

    // loop through a project's task to create each task element
    projectTasks.forEach((task) => {
        const taskRow = document.createElement("div")
        taskRow.id = "task-row"

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

        const individualTaskTitle = document.createElement("h3")
        individualTaskTitle.textContent = task.title
        checkboxAndTitleDiv.appendChild(checkboxInput)
        checkboxAndTitleDiv.appendChild(individualTaskTitle)

        // create the task's edit and delete buttons
        const taskButtonsDiv = document.createElement("div")
        taskButtonsDiv.id = "task-buttons-div"
        const taskDate = document.createElement("p")
        taskDate.textContent = task.dueDate
        const editTaskBtn = document.createElement("button")
        editTaskBtn.textContent = "Edit Task"
        editTaskBtn.dataset.taskId = task.id
        editTaskBtn.dataset.projectId = project.getProjectId()
        const deleteTaskBtn = document.createElement("button")
        deleteTaskBtn.dataset.taskId = task.id
        deleteTaskBtn.dataset.projectId = project.getProjectId()
        deleteTaskBtn.textContent = "Delete Task"
        taskButtonsDiv.appendChild(taskDate)
        taskButtonsDiv.appendChild(editTaskBtn)
        taskButtonsDiv.appendChild(deleteTaskBtn)

        taskRow.appendChild(checkboxAndTitleDiv)
        taskRow.appendChild(taskButtonsDiv)
        taskSection.appendChild(taskRow)

    })

    // construct the page
    contentContainer.appendChild(projectHeaderSection)
    projectHeaderSection.appendChild(projectTitle)
    projectHeaderSection.appendChild(editAndDeleteDiv)
    editAndDeleteDiv.appendChild(editProjectBtn)
    editAndDeleteDiv.appendChild(deleteProjectBtn)
    contentContainer.appendChild(projectDescription)

    contentContainer.append(createAndFilterSection)
    createAndFilterSection.appendChild(createAndFilterDiv)
    createAndFilterDiv.appendChild(priorityLabel)
    createAndFilterDiv.appendChild(selectPriority)
    selectPriority.appendChild(priorityAll)
    selectPriority.appendChild(priorityHigh)
    selectPriority.appendChild(priorityLow)
    createAndFilterSection.appendChild(createTaskBtn)

    contentContainer.appendChild(taskHeaders)
    contentContainer.appendChild(taskSection)

}