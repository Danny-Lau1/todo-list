/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buildProjectScreen.js":
/*!***********************************!*\
  !*** ./src/buildProjectScreen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contentContainer: () => (/* binding */ contentContainer),\n/* harmony export */   taskForm: () => (/* binding */ taskForm),\n/* harmony export */   updateProjectScreen: () => (/* binding */ updateProjectScreen)\n/* harmony export */ });\nconst contentContainer = document.getElementById(\"content\")\nconst taskForm = document.getElementById(\"create-task-form\")\n\nfunction updateProjectScreen(project) {\n    contentContainer.innerHTML = \"\"\n\n    // create title\n    const projectHeaderSection = document.createElement(\"section\")\n    projectHeaderSection.className = \"project-header\"\n    const projectTitle = document.createElement(\"h2\")\n    projectTitle.textContent = project.getProjectTitle()\n    const projectDescription = document.createElement(\"p\")\n    projectDescription.textContent = project.getProjectDescription()\n\n    // create edit and delete buttons\n    // attach the project's id property to it edit and delete button\n    const editAndDeleteDiv = document.createElement('div')\n\n    const editProjectBtn = document.createElement(\"button\")\n    editProjectBtn.textContent = \"Edit Project\"\n    editProjectBtn.dataset.id = project.getProjectId()\n\n    const deleteProjectBtn = document.createElement(\"button\")\n    deleteProjectBtn.textContent = \"Delete Project\"\n    deleteProjectBtn.dataset.id = project.getProjectId()\n\n    // create task button\n    const createAndFilterSection = document.createElement(\"section\")\n    createAndFilterSection.id = \"create-and-filter-section\"\n    const createAndFilterDiv = document.createElement(\"div\")\n    const createTaskBtn = document.createElement(\"button\")\n    createTaskBtn.textContent = \"Create Task\"\n\n    // link the task form with the projectId to put tasks in their respective projects\n    taskForm.dataset.id = project.getProjectId()\n\n    // create filter dropdown\n    const priorityLabel = document.createElement(\"label\")\n    priorityLabel.textContent = \"Filter By Priority: \"\n    priorityLabel.setAttribute(\"for\", \"selected-priority\")\n    const selectPriority = document.createElement(\"select\")\n    selectPriority.setAttribute(\"name\", \"selected-priority\")\n    const priorityAll = document.createElement(\"option\")\n    priorityAll.textContent = \"All\"\n    priorityAll.value = \"all\"\n    const priorityHigh = document.createElement(\"option\")\n    priorityHigh.textContent = \"High Priority\"\n    priorityHigh.value = \"high-priority\"\n    const priorityLow = document.createElement(\"option\")\n    priorityLow.textContent = \"Low Priority\"\n    priorityLow.value = \"low-priority\"\n\n    // display all of a project's task\n\n    const taskSection = document.createElement(\"section\")\n    taskSection.id = \"task-section\"\n    const projectTasks = project.getTasks()\n\n    // loop through a project's task to create each task element\n    projectTasks.forEach((task) => {\n        const taskRow = document.createElement(\"div\")\n        taskRow.id = \"task-row\"\n\n        // create the task title and checkbox\n        const checkboxAndTitleDiv = document.createElement(\"div\")\n        checkboxAndTitleDiv.id = \"checkbox-and-title-div\"\n        const checkboxInput = document.createElement('input')\n        checkboxInput.type = \"checkbox\"\n        checkboxAndTitleDiv.name = \"completed\"\n        const individualTaskTitle = document.createElement(\"h3\")\n        individualTaskTitle.textContent = task.title\n        checkboxAndTitleDiv.appendChild(checkboxInput)\n        checkboxAndTitleDiv.appendChild(individualTaskTitle)\n\n        // create the task's edit and delete buttons\n        const taskButtonsDiv = document.createElement(\"div\")\n        taskButtonsDiv.id = \"task-buttons-div\"\n        const taskDate = document.createElement(\"p\")\n        taskDate.textContent = task.dueDate\n        const editTaskBtn = document.createElement(\"button\")\n        editTaskBtn.textContent = \"Edit Task\"\n        const deleteTaskBtn = document.createElement(\"button\")\n        deleteTaskBtn.dataset.id = task.id\n        deleteTaskBtn.textContent = \"Delete Task\"\n        taskButtonsDiv.appendChild(taskDate)\n        taskButtonsDiv.appendChild(editTaskBtn)\n        taskButtonsDiv.appendChild(deleteTaskBtn)\n\n        taskRow.appendChild(checkboxAndTitleDiv)\n        taskRow.appendChild(taskButtonsDiv)\n        taskSection.appendChild(taskRow)\n\n    })\n\n    // construct the page\n    contentContainer.appendChild(projectHeaderSection)\n    projectHeaderSection.appendChild(projectTitle)\n    projectHeaderSection.appendChild(editAndDeleteDiv)\n    editAndDeleteDiv.appendChild(editProjectBtn)\n    editAndDeleteDiv.appendChild(deleteProjectBtn)\n    contentContainer.appendChild(projectDescription)\n\n    contentContainer.append(createAndFilterSection)\n    createAndFilterSection.appendChild(createAndFilterDiv)\n    createAndFilterDiv.appendChild(priorityLabel)\n    createAndFilterDiv.appendChild(selectPriority)\n    selectPriority.appendChild(priorityAll)\n    selectPriority.appendChild(priorityHigh)\n    selectPriority.appendChild(priorityLow)\n    createAndFilterSection.appendChild(createTaskBtn)\n\n    contentContainer.appendChild(taskSection)\n\n}\n\n//# sourceURL=webpack://todo-list/./src/buildProjectScreen.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _buildProjectScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildProjectScreen.js */ \"./src/buildProjectScreen.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\n\n\nconst addProjectBtn = document.getElementById(\"add-project\")\nconst projectModal = document.getElementById(\"create-project-modal\")\nconst cancelProjectBtn = document.getElementById(\"cancel-project-btn\")\nconst projectForm = document.getElementById(\"create-project-form\")\nconst sidebarProjectList = document.getElementById(\"project-list\")\nconst taskModal = document.getElementById(\"create-task-modal\")\nconst cancelTaskBtn = document.getElementById(\"cancel-task-btn\")\nconst highPriorityRadio = document.getElementById(\"high-priority\");\nconst lowPriorityRadio = document.getElementById(\"low-priority\");\n\n\n// open up project modal \naddProjectBtn.addEventListener(\"click\", () => {\n    projectModal.showModal()\n})\n\n\n// close project modal by cancelling\ncancelProjectBtn.addEventListener(\"click\", (event) => {\n    event.preventDefault()\n    projectModal.close()\n})\n\n\n//close task modal by cancelling\ncancelTaskBtn.addEventListener(\"click\", (event) => {\n    event.preventDefault()\n    taskModal.close()\n})\n\n\n// get the project title from user and call createNewProject from project.js\nfunction addProjects(event) {\n    event.preventDefault()\n    let projectTitle = document.getElementById(\"project-title\").value\n    let projectDescription = document.getElementById(\"project-description\").value\n    const projectInstance = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projectTitle, projectDescription)\n    return projectInstance\n}\n\n\n// after user enters a new project -> update sidebar and bring up new project\nprojectForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault()\n\n    const projectId = projectForm.dataset.id;\n    let projectInstance;\n\n    // if a projectId already exists in editing form's html\n    if (projectId) {\n        const projectTitle = document.getElementById(\"project-title\").value;\n        const projectDescription = document.getElementById(\"project-description\").value\n        projectInstance = returnProjectInstance(projectId);\n        editProject(projectInstance, projectTitle, projectDescription)\n    }\n    // if projectId does not exist, create a new project\n    else {\n        projectInstance = addProjects(event)\n    }\n\n    // reset the project form's html id, update sidebar, update project screen\n    // reset project form inputs, close project modal\n    projectForm.dataset.id = \"\"\n    ;(0,_buildProjectScreen_js__WEBPACK_IMPORTED_MODULE_2__.updateProjectScreen)(projectInstance)\n    updateSideBar()\n    projectForm.reset()\n    projectModal.close()\n\n    console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectList)\n})\n\n\n// adds new projects to the side bar\n// creates sidebar button and maps object's projectId to the buttons dataset.id\nfunction updateSideBar() {\n    sidebarProjectList.innerHTML = \"\"\n    _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project) => {\n        const individualProjectBtn = document.createElement(\"button\")\n        individualProjectBtn.textContent = project.title\n        individualProjectBtn.dataset.id = project.getProjectId()\n        sidebarProjectList.appendChild(individualProjectBtn)\n    })\n}\n\n\n// Bring up the selected project from the sidebar to the content screen\nsidebarProjectList.addEventListener(\"click\", (event) => {\n    if (event.target.tagName === \"BUTTON\") {\n        const projectId = event.target.dataset.id;\n        const project = _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.find(project => project.id === parseInt(projectId));\n        (0,_buildProjectScreen_js__WEBPACK_IMPORTED_MODULE_2__.updateProjectScreen)(project)\n    }\n});\n\n\n_buildProjectScreen_js__WEBPACK_IMPORTED_MODULE_2__.contentContainer.addEventListener(\"click\", (event) => {\n    if (event.target.tagName === \"BUTTON\") {\n\n        const button = event.target\n        const projectId = button.dataset.id\n\n        // Bring up the filled out project form\n        // assign the projectId to the dataset.id of the project form\n        if (button.textContent === \"Edit Project\") {\n            // Implement edit project functionality\n            populateEditForm(projectId)\n            projectForm.dataset.id = projectId\n            projectModal.showModal();\n\n        }\n\n        // Check if the clicked button is a delete button\n        if (button.textContent === \"Delete Project\") {\n            // Implement delete project functionality\n            removeProject(projectId)\n\n        }\n\n        if (button.textContent === \"Create Task\") {\n            taskModal.showModal()\n            openTaskModal()\n        }\n\n        if (button.textContent === \"Delete Task\") {\n            const taskId = button.dataset.id\n\n            removeTask(projectId, taskId)\n        }\n    }\n});\n\n\nfunction removeTask(projectId, taskId) {\n    const projectInstance = returnProjectInstance(projectId)\n    if (projectInstance) {\n        (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(projectInstance, taskId);\n        (0,_buildProjectScreen_js__WEBPACK_IMPORTED_MODULE_2__.updateProjectScreen)(projectInstance);\n        console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectList);\n    } else {\n        console.error(`Project with ID ${projectId} not found.`);\n    }\n\n}\n\n\n// brings up an existing project's form to edit content\nfunction populateEditForm(projectId) {\n    const project = (_project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.find(project => project.id === parseInt(projectId)));\n    const projectTitleInput = document.getElementById(\"project-title\");\n    const projectDescription = document.getElementById(\"project-description\")\n    projectTitleInput.value = project.getProjectTitle();\n    projectDescription.value = project.getProjectDescription()\n}\n\n\nfunction openTaskModal() {\n    console.log(`HERE ${_buildProjectScreen_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.id}`)\n    taskModal.showModal()\n}\n\n\n_buildProjectScreen_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault()\n    const projectId = _buildProjectScreen_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.id\n    // capture information from form\n    const taskTitle = document.getElementById(\"task-title\").value\n    const taskDueDate = document.getElementById(\"due-date\").value\n    const taskPriority = function () {\n        if (highPriorityRadio.checked) {\n            return highPriorityRadio.value\n        }\n        else if (lowPriorityRadio.checked) {\n            return lowPriorityRadio.value\n        }\n    }()\n    const taskInstance = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.createNewTask)(taskTitle, taskDueDate, taskPriority, projectId)\n\n    // add the new task to the project instance\n    const projectInstance = returnProjectInstance(projectId)\n    projectInstance.addTaskToProject(taskInstance)\n    _buildProjectScreen_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.reset()\n    taskModal.close()\n    console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectList)\n    ;(0,_buildProjectScreen_js__WEBPACK_IMPORTED_MODULE_2__.updateProjectScreen)(projectInstance)\n})\n\n\nfunction returnProjectInstance(projectId) {\n    const projectInstance = _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.find(project => project.id === parseInt(projectId));\n    return projectInstance\n}\n\n\nfunction editProject(projectInstance, projectTitle, projectDescription) {\n    projectInstance.updateProject(projectTitle, projectDescription)\n}\n\n\nfunction removeProject(projectId) {\n    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(projectId)\n    updateSideBar()\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewProject: () => (/* binding */ createNewProject),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\nlet projectList = [];\nlet projectId = 0\n\nclass Project {\n    constructor(title, id, description) {\n        this.title = title\n        this.id = id\n        this.description = description\n        this.listOfTasks = []\n    }\n\n    updateProject(newTitle, newDescription) {\n        this.title = newTitle\n        this.description = newDescription\n    }\n    addTaskToProject(task) {\n        this.listOfTasks.push(task)\n    }\n    getTasks() {\n        return this.listOfTasks\n    }\n\n    getProjectTitle() {\n        return this.title\n    }\n\n    getProjectDescription() {\n        return this.description\n    }\n    getProjectId() {\n        return this.id\n    }\n}\n\n// create new project category\nfunction createNewProject(title, description) {\n    let newProject = new Project(title, projectId, description)\n    incrementProjectId()\n    addProjectToProjectList(newProject)\n    return newProject\n}\n\nfunction incrementProjectId() {\n    projectId += 1\n}\n\n// delete project from projectList\nfunction deleteProject(id) {\n    for (let i = 0; i < projectList.length; i++) {\n\n        if (projectList[i].id === parseInt(id)) {\n            projectList.splice(i, 1)\n        }\n    }\n\n}\n\n// push project to project list \nfunction addProjectToProjectList(project) {\n    projectList.push(project)\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewTask: () => (/* binding */ createNewTask),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask)\n/* harmony export */ });\nlet taskId = 0\n\nclass Task {\n    constructor(title, dueDate, priority, id, projectId) {\n        this.title = title;\n        this.dueDate = dueDate;\n        this.priority = priority\n        this.id = id\n        this.projectId = projectId\n    }\n}\n\nfunction createNewTask(title, dueDate, priority, projectId) {\n    let newTask = new Task(title, dueDate, priority, taskId, projectId)\n    incrementTaskId()\n    console.log(newTask)\n    return newTask\n}\n\nfunction deleteTask(projectInstance, Id) {\n    const projectListOfTasks = projectInstance.getTasks()\n    console.log(`1. TASK ID IS ${Id}`)\n    console.log(projectListOfTasks)\n    for (let i = 0; i < projectListOfTasks.length; i++) {\n        if (projectListOfTasks[i].id === parseInt(Id)) {\n            projectListOfTasks.splice(i, 1)\n        }\n    }\n}\n\nfunction incrementTaskId() {\n    taskId += 1\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;