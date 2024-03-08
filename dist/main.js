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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\nconst addProjectBtn = document.getElementById(\"add-project\")\nconst projectModal = document.getElementById(\"create-project-modal\")\nconst confirmProjectBtn = document.getElementById(\"confirm-project-btn\")\nconst cancelProjectBtn = document.getElementById(\"cancel-project-btn\")\nconst projectForm = document.getElementById(\"create-project-form\")\nconst sidebarProjectList = document.getElementById(\"project-list\")\n\naddProjectBtn.addEventListener(\"click\", () => {\n    projectModal.showModal()\n})\n\ncancelProjectBtn.addEventListener(\"click\", () => {\n    projectModal.close()\n})\n\n// get the project title from user and call createNewProject from project.js\nfunction addProjects(event) {\n    event.preventDefault()\n    let projectTitle = document.getElementById(\"project-title\").value\n    ;(0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projectTitle)\n}\n\n// after user enters a new project and clicks\nprojectForm.addEventListener(\"submit\", (event) => {\n    addProjects(event)\n    projectForm.reset()\n    console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectList)\n    console.log(typeof (_project_js__WEBPACK_IMPORTED_MODULE_0__.projectList[0]))\n    updateSideBar()\n    projectModal.close()\n})\n\n\n\n// adds new projects to the side bar\nfunction updateSideBar() {\n    sidebarProjectList.innerHTML = \"\"\n    _project_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project) => {\n        const individualProjectBtn = document.createElement(\"button\")\n        individualProjectBtn.textContent = project.title\n        sidebarProjectList.appendChild(individualProjectBtn)\n    })\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewProject: () => (/* binding */ createNewProject),\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\nlet projectList = [];\nlet projectId = 0\n\nclass Project {\n    constructor(title, id) {\n        this.title = title\n        this.id = id\n        this.listOfTasks = []\n    }\n\n    editProjectTitle(newTitle) {\n        this.title = newTitle\n    }\n    addTaskToProject(task) {\n        this.listOfTasks.push(task)\n    }\n    get tasks() {\n        return this.listOfTasks\n    }\n}\n\n// create new project category\nfunction createNewProject(title) {\n    let newProject = new Project(title, projectId)\n    incrementProjectId()\n    addProjectToProjectList(newProject)\n}\n\nfunction incrementProjectId() {\n    projectId += 1\n}\n\nfunction deleteProject(title) {\n\n}\n\n// push project to project list \nfunction addProjectToProjectList(project) {\n    projectList.push(project)\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

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