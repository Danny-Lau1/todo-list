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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\nconst addProjectBtn = document.getElementById(\"add-project\")\nconst projectModal = document.getElementById(\"create-project-modal\")\nconst cancelProjectBtn = document.getElementById(\"cancel-project-btn\")\nconst projectForm = document.getElementById(\"create-project-form\")\nconst sidebarProjectList = document.getElementById(\"project-list\")\nconst contentContainer = document.getElementById(\"content\")\n\n\naddProjectBtn.addEventListener(\"click\", () => {\n    projectModal.showModal()\n})\n\ncancelProjectBtn.addEventListener(\"click\", (event) => {\n    event.preventDefault()\n    projectModal.close()\n})\n\n// get the project title from user and call createNewProject from project.js\nfunction addProjects(event) {\n    event.preventDefault()\n    let projectTitle = document.getElementById(\"project-title\").value\n    const projectInstance = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projectTitle)\n    return projectInstance\n}\n\n// after user enters a new project -> update sidebar and bring up new project\nprojectForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault()\n    const projectTitle = document.getElementById(\"project-title\").value;\n    const projectId = projectForm.dataset.id;\n    let projectInstance;\n\n    // if a projectId already exists in editing form\n    if (projectId) {\n        console.log(\"FOUND\")\n        projectInstance = _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.find(project => project.id === parseInt(projectId));\n        editProject(projectInstance, projectTitle)\n    }\n    // if projectId does not exist, create a new project\n    else {\n        projectInstance = addProjects(event)\n    }\n\n    projectForm.dataset.id = \"\"\n    updateProjectScreen(projectInstance)\n    updateSideBar()\n    projectForm.reset()\n    projectModal.close()\n\n    console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectList)\n})\n\n\n\n// adds new projects to the side bar\n// creates sidebar button and maps object's projectId to the buttons dataset.id\nfunction updateSideBar() {\n    sidebarProjectList.innerHTML = \"\"\n    _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project) => {\n        const individualProjectBtn = document.createElement(\"button\")\n        individualProjectBtn.textContent = project.title\n        individualProjectBtn.dataset.id = project.getProjectId()\n        sidebarProjectList.appendChild(individualProjectBtn)\n    })\n}\n\n// Bring up the selected project from the sidebar to the content screen\nsidebarProjectList.addEventListener(\"click\", (event) => {\n    if (event.target.tagName === \"BUTTON\") {\n        const projectId = event.target.dataset.id;\n        const project = _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.find(project => project.id === parseInt(projectId));\n        updateProjectScreen(project)\n    }\n});\n\nfunction updateProjectScreen(project) {\n    contentContainer.innerHTML = \"\"\n\n    // create title\n    const projectHeaderSection = document.createElement(\"section\")\n    projectHeaderSection.className = \"project-header\"\n    const projectTitle = document.createElement(\"h2\")\n    projectTitle.textContent = project.getProjectTitle()\n\n\n    // create edit and delete buttons\n    // attach the project's id property to it edit and delete button\n    const editProjectBtn = document.createElement(\"button\")\n    editProjectBtn.textContent = \"Edit\"\n    editProjectBtn.dataset.id = project.getProjectId()\n\n    const deleteProjectBtn = document.createElement(\"button\")\n    deleteProjectBtn.textContent = \"Delete\"\n    deleteProjectBtn.dataset.id = project.getProjectId()\n\n\n    // add individual project data\n    contentContainer.appendChild(projectHeaderSection)\n    projectHeaderSection.appendChild(projectTitle)\n    projectHeaderSection.appendChild(editProjectBtn)\n    projectHeaderSection.appendChild(deleteProjectBtn)\n\n}\n\ncontentContainer.addEventListener(\"click\", (event) => {\n    if (event.target.tagName === \"BUTTON\") {\n\n        const button = event.target\n        const projectId = button.dataset.id\n\n        // Bring up the filled out project form\n        // assign the projectId to the dataset.id of the project form\n        if (button.textContent === \"Edit\") {\n            // Implement edit project functionality\n            populateEditForm(projectId)\n            projectForm.dataset.id = projectId\n            console.log(`project edit ID is: ${projectId}`)\n            projectModal.showModal();\n            console.log(\"Edit button clicked for the displayed project\");\n        }\n\n        // Check if the clicked button is a delete button\n        if (button.textContent === \"Delete\") {\n            // Implement delete project functionality\n            removeProject(projectId)\n\n        }\n    }\n});\n\nfunction populateEditForm(projectId) {\n    const project = (_project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.find(project => project.id === parseInt(projectId)));\n    const projectTitleInput = document.getElementById(\"project-title\");\n    projectTitleInput.value = project.title;\n\n}\n\nfunction editProject(projectInstance, projectTitle) {\n    projectInstance.updateProject(projectTitle)\n}\n\nfunction removeProject(projectId) {\n    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(projectId)\n    updateSideBar()\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewProject: () => (/* binding */ createNewProject),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\nlet projectList = [];\nlet projectId = 0\n\nclass Project {\n    constructor(title, id) {\n        this.title = title\n        this.id = id\n        this.listOfTasks = []\n    }\n\n    updateProject(newTitle) {\n        this.title = newTitle\n    }\n    addTaskToProject(task) {\n        this.listOfTasks.push(task)\n    }\n    getTasks() {\n        return this.listOfTasks\n    }\n\n    getProjectTitle() {\n        return this.title\n    }\n    getProjectId() {\n        return this.id\n    }\n}\n\n// create new project category\nfunction createNewProject(title) {\n    let newProject = new Project(title, projectId)\n    incrementProjectId()\n    addProjectToProjectList(newProject)\n    return newProject\n}\n\nfunction incrementProjectId() {\n    projectId += 1\n}\n\nfunction deleteProject(id) {\n    for (let i = 0; i < projectList.length; i++) {\n\n        if (projectList[i].id === parseInt(id)) {\n            projectList.splice(i, 1)\n        }\n    }\n\n}\n\n\n\n// function editProject(id) {\n//     for (let i = 0; i < projectList.length; i++) {\n\n//         if (projectList[i].id === parseInt(id)) {\n//             projectList[i].editProject()\n//         }\n//     }\n\n// }\n\n// push project to project list \nfunction addProjectToProjectList(project) {\n    projectList.push(project)\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

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