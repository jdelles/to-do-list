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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --color-anti-flash-white: #f2f2f2;\\n    --color-white-smoke: #f4faf7;\\n    --color-white-cream: #f4fffb; \\n    --color-middle-blue: #81d0e8; \\n    --color-iceberg: #71a1d1; \\n}\\n\\n*, \\n*::after, \\n*::before {\\n    margin: 0; \\n    padding: 0; \\n    box-sizing: border-box;\\n}\\n\\nbody {\\n    background: var(--color-anti-flash-white);\\n}\\n\\nheader {\\n    text-align: center;\\n    background: var(--color-white-smoke); \\n    font-size: 24px;\\n    padding: 2em;\\n}\\n\\nbutton {\\n    padding: 5px 10px; \\n    margin: 5px 10px 5px 0px; \\n    background-color: var(--color-middle-blue);\\n    color: var(--color-white-cream); \\n    font-size: 18px; \\n    border: 1px solid transparent; \\n}\\n\\nbutton:hover {\\n    background: var(--color-iceberg);\\n    cursor: pointer;\\n}\\n\\nmain {\\n    margin: 0 auto; \\n    padding: 2em; \\n    max-width: 700px; \\n}\\n\\nmain h2 {\\n    font-size: 22px; \\n    margin-bottom: 5px; \\n}\\n\\nmain p,\\nmain li {\\n    font-size: 18px; \\n    margin-bottom: 5px; \\n}\\n\\ninput {\\n    width: 100%; \\n    margin-bottom: 5px; \\n    font-size: 16px; \\n    padding: 5px; \\n}\\n\\nfooter {\\n    position: fixed; \\n    bottom: 0; \\n    width: 100%; \\n    background: var(--color-middle-blue); \\n    color: var(--color-white-smoke); \\n    font-size: 16px; \\n    padding: 1em; \\n    text-align: center; \\n}\\n\\nfooter a {\\n    color: var(--color-iceberg); \\n    text-decoration: none;\\n}\\n\\nfooter a:hover {\\n    color: var(--color-white-smoke); \\n    cursor: pointer;\\n}\\n\\n.hidden {\\n    display: none; \\n}\\n\\n.ghost-button {\\n    padding: 5px 10px; \\n    margin: 5px; \\n    background-color: var(--color-anti-flash-white); \\n    color: var(--color-middle-blue);\\n    font-size: 18px; \\n    border: 1px solid var(--color-middle-blue);; \\n}\\n\\n.ghost-button:hover {\\n    color: var(--color-white-cream); \\n}\\n\\n#toDoForm, \\n#projectForm {\\n    border: 2px solid var(--color-middle-blue); \\n    border-radius: 10px;\\n    padding: 15px; \\n    box-shadow: 5px 10px var(--color-iceberg); \\n}\\n\\n#toDoForm h2,\\n#projectForm h2 {\\n    margin: 10px auto; \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ui.js */ \"./src/ui/ui.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n \n \n\n(0,_ui_ui_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project/project.js":
/*!********************************!*\
  !*** ./src/project/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.projectName = name; \n        this.projectToDos = []; \n        this.active = true; \n    }\n\n    getName() {\n        return this.projectName; \n    }\n\n    addToDo(todo) {\n        this.projectToDos.push(todo); \n    }\n\n    removeToDo(todo) {\n        const index = this.projectToDos.indexOf(todo); \n        if (index > -1) {\n            this.projectToDos.splice(index, 1); \n        }\n    }\n\n    setActive(state) {\n        this.active = state; \n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/project/project.js?");

/***/ }),

/***/ "./src/storage/storage.js":
/*!********************************!*\
  !*** ./src/storage/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveToStorage\": () => (/* binding */ saveToStorage),\n/* harmony export */   \"loadFromStorage\": () => (/* binding */ loadFromStorage)\n/* harmony export */ });\n/**\n * COPIED FROM LIBRARY PROJECT -- NOT YET SETUP FOR THIS PROJECT\n * \n * \n * \n * Tests whether storage is supported by the user's browser\n * Source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API\n * @param {*} type The type of storage to test\n * @returns True or an exception\n */\n function storageAvailable(type) {\n    var storage;\n    try {\n      storage = window[type];\n      var x = \"__storage_test__\";\n      storage.setItem(x, x);\n      storage.removeItem(x);\n      return true;\n    } catch (e) {\n      return (\n        e instanceof DOMException &&\n        // everything except Firefox\n        (e.code === 22 ||\n          // Firefox\n          e.code === 1014 ||\n          // test name field too, because code might not be present\n          // everything except Firefox\n          e.name === \"QuotaExceededError\" ||\n          // Firefox\n          e.name === \"NS_ERROR_DOM_QUOTA_REACHED\") &&\n        // acknowledge QuotaExceededError only if there's something already stored\n        storage &&\n        storage.length !== 0\n      );\n    }\n  }\n  \n  /**\n   * Saves the to do list to local storage\n   */\n  function saveToStorage() {\n    localStorage.setItem(\"projects\", JSON.stringify(projects));\n  }\n  \n  /**\n   * Loads the to do list from local storage on page load\n   */\n  function loadFromStorage() {\n    if (localStorage.projects) {\n      let data = localStorage.getItem(\"projects\");\n      return JSON.parse(data);\n    }\n  }\n\n   \n\n//# sourceURL=webpack://to-do-list/./src/storage/storage.js?");

/***/ }),

/***/ "./src/toDoManager/toDoManager.js":
/*!****************************************!*\
  !*** ./src/toDoManager/toDoManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/storage.js */ \"./src/storage/storage.js\");\n/* harmony import */ var _project_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/project.js */ \"./src/project/project.js\");\n/* harmony import */ var _todos_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todos/todo.js */ \"./src/todos/todo.js\");\n \n \n \n\nconst projects = []; \n\nconst projectManager = (() => {\n\n    function getProjects() {\n        return projects; \n    }\n\n    let activeProject; \n    let defaultProject; \n\n    // const setActiveProject = (newActive) => {\n    //     activeProject.setActive(false); \n    //     activeProject = newActive; \n    //     activeProject.setActive(true); \n    // }\n\n    const createProject = (name) => {\n        const newProject = new _project_project_js__WEBPACK_IMPORTED_MODULE_1__.default(name); \n        // setActiveProject(newProject); \n        projects.push(newProject); \n        return newProject;  \n    }\n\n    const deleteProject = (name) => {\n        const index = projects.indexOf(name); \n        if (index > -1) {\n            projectKeys.splice(index, 1); \n        }\n        activeProject = defaultProject; \n    }\n\n    const createDefaultProject = (() => {\n        defaultProject = createProject(\"default\"); \n        activeProject = defaultProject; \n    })(); \n\n    const addTodoToProject = (title, description, date, priority) => {\n        activeProject.addTodo(new _todos_todo_js__WEBPACK_IMPORTED_MODULE_2__.default(title, description, date, priority)); \n    }\n\n    const removeTodoFromProject = (todo) => {\n        activeProject.removeToDo(todo); \n        // update UI\n    }\n\n    return {activeProject, getProjects, createProject, deleteProject, addTodoToProject, removeTodoFromProject}\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager); \n\n\n//# sourceURL=webpack://to-do-list/./src/toDoManager/toDoManager.js?");

/***/ }),

/***/ "./src/todos/todo.js":
/*!***************************!*\
  !*** ./src/todos/todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n    constructor(title, description, date, priority) {\n        this.title = title; \n        this.description = description; \n        this.date = date; \n        this.priority = priority; \n    }\n\n    get title() {\n        return this.title; \n    }\n\n    set title(title) {\n        this.title = title; \n    }\n\n    get description() {\n        return this.description; \n    }\n\n    set description(description) {\n        this.description = description; \n    }\n\n    get date() {\n        return this.date; \n    }\n\n    set date(date) {\n        this.date = date; \n    }\n\n    get priority() {\n        return this.priority; \n    }\n\n    set priority(priority) {\n        this.priority = priority; \n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/todos/todo.js?");

/***/ }),

/***/ "./src/ui/ui.js":
/*!**********************!*\
  !*** ./src/ui/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDoManager_toDoManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDoManager/toDoManager.js */ \"./src/toDoManager/toDoManager.js\");\n \n\nfunction updateDisplay() {\n    const projectDiv = document.querySelector(\"#projectList\"); \n    showProjectList(); \n    projectDiv.innerHTML = \"\"; \n    _toDoManager_toDoManager_js__WEBPACK_IMPORTED_MODULE_0__.default.getProjects().forEach(project => {\n        const p = document.createElement('p'); \n        p.textContent = project.getName();\n        projectDiv.appendChild(p); \n    }); \n}\n\nfunction projectDisplay() {\n    const projectDiv = document.createElement(\"div\"); \n    projectDiv.id = \"projectList\"; \n    return projectDiv; \n}\n\nfunction showToDoList() {\n    const projectList = document.querySelector(\"#projectList\");    \n    const projectForm = document.querySelector(\"#projectForm\"); \n    const toDoForm = document.querySelector(\"#toDoForm\"); \n    \n    if (!projectList.classList.contains('hidden')) {\n        projectList.classList.add('hidden'); \n    }\n    if (toDoForm.classList.contains('hidden')) {\n        toDoForm.classList.remove('hidden'); \n    }\n    if (!projectForm.classList.contains('hidden')) {\n        projectForm.classList.add('hidden'); \n    }\n}\n\nfunction showProjectList() {\n    const projectList = document.querySelector(\"#projectList\");    \n    const projectForm = document.querySelector(\"#projectForm\"); \n    const toDoForm = document.querySelector(\"#toDoForm\"); \n    \n    if (projectList.classList.contains('hidden')) {\n        projectList.classList.remove('hidden'); \n    }\n    if (!toDoForm.classList.contains('hidden')) {\n        toDoForm.classList.add('hidden'); \n    }\n    if (!projectForm.classList.contains('hidden')) {\n        projectForm.classList.add('hidden'); \n    }\n}\n\nfunction showProjectForm() {\n    const projectList = document.querySelector(\"#projectList\");    \n    const projectForm = document.querySelector(\"#projectForm\"); \n    const toDoForm = document.querySelector(\"#toDoForm\"); \n    \n    if (!projectList.classList.contains('hidden')) {\n        projectList.classList.add('hidden'); \n    }\n    if (!toDoForm.classList.contains('hidden')) {\n        toDoForm.classList.add('hidden'); \n    }\n    if (projectForm.classList.contains('hidden')) {\n        projectForm.classList.remove('hidden'); \n    }\n}\n\nfunction toDoForm() {\n    const formDiv = document.createElement(\"div\"); \n\n    const intro = document.createElement(\"h2\"); \n    intro.textContent = \"Add a new to do\"; \n    \n    const form = document.createElement(\"form\");\n\n    const title = document.createElement(\"input\"); \n    title.type = \"text\"; \n    title.placeholder = \"Title\"; \n    title.id = \"title\"; \n\n    const description = document.createElement(\"input\"); \n    description.type = \"text\"; \n    description.placeholder = \"Description\"; \n    description.id = \"description\";\n\n    const priority = document.createElement(\"input\"); \n    priority.type = \"text\"; \n    priority.placeholder = \"Priority\"; \n    priority.id = \"priority\";\n\n    const date = document.createElement(\"input\"); \n    date.type = \"text\"; \n    date.placeholder = \"Date\"; \n    date.id = \"date\"; \n\n    const submit = document.createElement(\"button\"); \n    submit.textContent = \"Submit\"; \n    submit.addEventListener('click', (event) => {\n        event.preventDefault();\n        const title = document.querySelector(\"#title\").value; \n        const description = document.querySelector(\"#description\").value; \n        const priority = document.querySelector(\"#priority\").value; \n        const date = document.querySelector(\"#date\").value; \n    });\n\n    const cancel = document.createElement(\"button\"); \n    cancel.classList.add('ghost-button'); \n    cancel.textContent = \"Cancel\"; \n    cancel.addEventListener('click', (event) => {\n        event.preventDefault();\n        document.querySelector(\"#title\").value = \"\"; \n        document.querySelector(\"#description\").value = \"\"; \n        document.querySelector(\"#priority\").value = \"\"; \n        document.querySelector(\"#date\").value = \"\"; \n        showProjectList(); \n    });\n\n    form.appendChild(title); \n    form.appendChild(description);\n    form.appendChild(priority);\n    form.appendChild(date);\n    form.appendChild(submit); \n    form.appendChild(cancel); \n\n    formDiv.appendChild(intro); \n    formDiv.appendChild(form);\n    formDiv.classList.add('hidden'); \n    formDiv.id = \"toDoForm\"; \n\n    return formDiv; \n}\n\nfunction projectForm() {\n    const projectDiv = document.createElement(\"div\"); \n\n    const intro = document.createElement(\"h2\"); \n    intro.textContent = \"Add a new project\"; \n    \n    const form = document.createElement(\"form\");\n\n    const title = document.createElement(\"input\"); \n    title.type = \"text\"; \n    title.placeholder = \"Project Name\"; \n    title.id = \"projectName\"; \n\n    const submit = document.createElement(\"button\"); \n    submit.textContent = \"Submit\"; \n    submit.addEventListener('click', (event) => {\n        event.preventDefault();\n        const name = document.querySelector(\"#projectName\").value; \n        _toDoManager_toDoManager_js__WEBPACK_IMPORTED_MODULE_0__.default.createProject(name); \n        document.querySelector(\"#projectForm\").classList.add(\"hidden\"); \n        updateDisplay(); \n    });\n\n    const cancel = document.createElement(\"button\"); \n    cancel.classList.add('ghost-button'); \n    cancel.textContent = \"Cancel\"; \n    cancel.addEventListener('click', (event) => {\n        event.preventDefault();\n        document.querySelector(\"#projectName\").value = \"\"; \n        showProjectList(); \n    });\n\n    form.appendChild(title); \n    form.appendChild(submit); \n    form.appendChild(cancel);\n\n    projectDiv.appendChild(intro); \n    projectDiv.appendChild(form);\n    projectDiv.classList.add('hidden'); \n    projectDiv.id = \"projectForm\"; \n\n    return projectDiv; \n}\n\nfunction loadHeader() {\n    const header = document.createElement(\"header\");\n    \n    const name = document.createElement(\"h1\");\n    name.textContent = \"To Do List\";\n  \n    header.appendChild(name);\n\n    // add nav TODO: onclicks bugged\n    const nav = document.createElement(\"nav\"); \n    \n    const addToDo = document.createElement(\"button\");\n    addToDo.addEventListener('click', (event) => {\n        event.preventDefault();\n        const form = document.getElementById('toDoForm'); \n        showToDoList(); \n    });  \n    addToDo.textContent = \"+ Todo\"; \n    \n    const addProject = document.createElement(\"button\"); \n    addProject.addEventListener('click', (event) => {\n        event.preventDefault();\n        showProjectForm(); \n    });\n    addProject.textContent = \"+ Project\"; \n    \n    nav.appendChild(addToDo);\n    nav.appendChild(addProject); \n\n    header.appendChild(nav); \n\n    return header;\n  }\n\nfunction loadMain() {\n    return document.createElement(\"main\");\n}\n\nfunction loadFooter() {\n    const footer = document.createElement(\"footer\"); \n    const div = document.createElement(\"div\"); \n    div.innerHTML = '<p>Copyright © <a href=\"https://www.github.com/jdelles\">James Delles</a> 2021</p>'; \n\n    footer.appendChild(div); \n\n    return footer; \n}\n\nfunction load() {\n    const content = document.getElementById(\"content\");\n    content.appendChild(loadHeader()); \n    const main = content.appendChild(loadMain()); \n    main.appendChild(toDoForm()); \n    main.appendChild(projectForm()); \n    main.appendChild(projectDisplay()); \n    content.appendChild(loadFooter()); \n  }\n \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load); \n\n//# sourceURL=webpack://to-do-list/./src/ui/ui.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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