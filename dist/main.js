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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Gentium+Plus:ital@1&family=Lato:ital,wght@0,300;0,400;1,300&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Handlee&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  background-color: rgb(0 79 255 / 66%);\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n#my-todo-title {\\r\\n  margin-bottom: 60px;\\r\\n  font-size: 40px;\\r\\n  font-family: \\\"Handlee\\\", cursive;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  max-height: 70%;\\r\\n  min-width: 290px;\\r\\n  max-width: 600px;\\r\\n  width: 90%;\\r\\n  margin: 0 auto;\\r\\n  background-color: white;\\r\\n  box-shadow: 0 15px 15px #888;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 15px;\\r\\n  border-radius: 2%;\\r\\n  margin-bottom: 70px;\\r\\n}\\r\\n\\r\\n.autorenew,\\r\\n.return {\\r\\n  color: #888;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 95%;\\r\\n  margin: 0 auto;\\r\\n  background: white;\\r\\n  border-bottom: #888 1px solid;\\r\\n}\\r\\n\\r\\n.h-title {\\r\\n  font-family: cursive;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 95%;\\r\\n  margin: 0 auto;\\r\\n  background-color: white;\\r\\n  padding-top: 12px;\\r\\n  padding-bottom: 10px;\\r\\n  border-bottom: #888 1px solid;\\r\\n}\\r\\n\\r\\n.input-form {\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.input-form[type='text'] {\\r\\n  font-size: 18px;\\r\\n  font-family: 'Handlee', serif;\\r\\n}\\r\\n\\r\\n.input-form:focus {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.submit {\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  padding: 14px;\\r\\n  justify-self: flex-end;\\r\\n}\\r\\n\\r\\n.clear:hover {\\r\\n  text-decoration: underline;\\r\\n  font-weight: 600;\\r\\n  background-color: skyblue;\\r\\n}\\r\\n\\r\\n.tasks {\\r\\n  min-height: 150px;\\r\\n  padding: 0 12px;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  cursor: move;\\r\\n  padding: 5px 0;\\r\\n}\\r\\n\\r\\n.input-list {\\r\\n  flex: 1;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.input-list[type='text'] {\\r\\n  font-size: 18px;\\r\\n  font-family: 'Handlee', serif;\\r\\n}\\r\\n\\r\\n.input-list:focus {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  display: none;\\r\\n  margin-right: 4px;\\r\\n}\\r\\n\\r\\n.dots {\\r\\n  cursor: pointer;\\r\\n  padding-right: 4px;\\r\\n  color: #888;\\r\\n}\\r\\n\\r\\n.deletedot {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.check:checked + .input-list {\\r\\n  text-decoration: line-through;\\r\\n  color: rgb(19, 19, 200);\\r\\n}\\r\\n\\r\\n.dragging {\\r\\n  background-color: #c6c8cb;\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-to-do-list-/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-to-do-list-/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-to-do-list-/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-to-do-list-/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-to-do-list-/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-to-do-list-/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-to-do-list-/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-to-do-list-/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-to-do-list-/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-to-do-list-/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_ChangeStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ChangeStatus.js */ \"./src/modules/ChangeStatus.js\");\n/* harmony import */ var _modules_setChecked_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/setChecked.js */ \"./src/modules/setChecked.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_changeIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changeIcon.js */ \"./src/modules/changeIcon.js\");\n/* harmony import */ var _modules_cleardelSave_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cleardelSave.js */ \"./src/modules/cleardelSave.js\");\n/* harmony import */ var _modules_drag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/drag.js */ \"./src/modules/drag.js\");\n\n\n\n\n\n\n\n\nconst dragContainer = document.querySelector('.tasks');\nconst form = document.querySelector('.form');\nconst allTasks = document.querySelector('.tasks');\nconst savedLists = JSON.parse(localStorage.getItem('todoTasks'));\nlet todoTasks = (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)();\n\nconst del = (e) => {\n  if (e.target.classList.contains('delete')) {\n    const deletebtns = Array.from(document.querySelectorAll('.delete'));\n    todoTasks = todoTasks.filter((x) => x.index !== deletebtns.indexOf(e.target) + 1);\n    e.target.parentNode.remove();\n    for (let i = 0; i < todoTasks.length; i += 1) {\n      todoTasks[i].index = i + 1;\n    }\n    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));\n  }\n};\n\nconst clearAll = (e) => {\n  if (e.target.classList.contains('clear')) {\n    const allToDelete = document.querySelectorAll('.list');\n    allToDelete.forEach((toDelete) => {\n      if (toDelete.childNodes[1].checked) {\n        toDelete.remove();\n        todoTasks = todoTasks.filter((x) => x.completed !== true);\n      }\n      for (let i = 0; i < todoTasks.length; i += 1) {\n        todoTasks[i].index = i + 1;\n      }\n      localStorage.setItem('todoTasks', JSON.stringify(todoTasks));\n    });\n  }\n};\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__.addTask)(todoTasks);\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__.createTasks)(todoTasks, allTasks);\n  (0,_modules_changeIcon_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(todoTasks);\n});\n\nallTasks.addEventListener('change', (e) => {\n  (0,_modules_ChangeStatus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, todoTasks);\n  (0,_modules_setChecked_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todoTasks);\n});\n\nallTasks.addEventListener('input', (e) => {\n  (0,_modules_cleardelSave_js__WEBPACK_IMPORTED_MODULE_5__.saveChanges)(e, todoTasks);\n});\n\ndocument.addEventListener('click', (e) => {\n  (0,_modules_cleardelSave_js__WEBPACK_IMPORTED_MODULE_5__.cleardelete)(e);\n  clearAll(e, todoTasks);\n  del(e);\n});\n\ndocument.addEventListener('dragstart', (e) => {\n  (0,_modules_drag_js__WEBPACK_IMPORTED_MODULE_6__.dragStart)(e);\n});\n\ndocument.addEventListener('dragend', (e) => {\n  (0,_modules_drag_js__WEBPACK_IMPORTED_MODULE_6__.dragend)(e);\n  (0,_modules_drag_js__WEBPACK_IMPORTED_MODULE_6__.arrFromLocalStorage)();\n});\n\ndragContainer.addEventListener('dragover', (e) => {\n  e.preventDefault();\n  (0,_modules_drag_js__WEBPACK_IMPORTED_MODULE_6__.dragOver)(e);\n});\n\nif (savedLists !== null) {\n  todoTasks = savedLists;\n  todoTasks.forEach((item) => {\n    allTasks.insertAdjacentHTML('beforeend', (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__.tasksHtml)(item));\n  });\n  (0,_modules_setChecked_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todoTasks);\n  (0,_modules_changeIcon_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(todoTasks);\n}\n\n\n//# sourceURL=webpack://my-to-do-list-/./src/index.js?");

/***/ }),

/***/ "./src/modules/ChangeStatus.js":
/*!*************************************!*\
  !*** ./src/modules/ChangeStatus.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst changeStatus = (e, arr) => {\n  if (e.target.classList.contains('check')) {\n    for (let i = 0; i < arr.length; i += 1) {\n      const allbox = Array.from(document.querySelectorAll('.check'));\n      if (allbox[i].checked && arr[i].completed === false) {\n        arr[i].completed = true;\n        localStorage.setItem('todoTasks', JSON.stringify(arr));\n      } else if (allbox[i].checked === false) {\n        arr[i].completed = false;\n        localStorage.setItem('todoTasks', JSON.stringify(arr));\n      }\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeStatus);\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/ChangeStatus.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"createTasks\": () => (/* binding */ createTasks),\n/* harmony export */   \"getFromLocalStorage\": () => (/* binding */ getFromLocalStorage),\n/* harmony export */   \"tasksHtml\": () => (/* binding */ tasksHtml)\n/* harmony export */ });\nconst inputForm = document.querySelector('.input-form');\n\nconst tasksHtml = ({ index, description }) => `\n<li class=\"list draggable\" id=\"${index}\" draggable=\"true\" data-id=\"ee\" >\n  <input type=\"checkbox\" name=\"task\" class=\"check\" data-asign=\"${index}\" >\n  <input type=\"text\" class=\"input-list\" value=\"${description}\">\n  <i class=\"material-icons dots\">\n    more_vert\n  </i>\n  <i class=\"material-icons delete\" >\n    delete\n  </i> \n</li>\n`;\n\nconst addTask = (arr) => {\n  if (inputForm.value.trim() === '') {\n    return;\n  }\n\n  if (arr.some((task) => task.description === inputForm.value)) {\n    alert('task already added');\n    return;\n  }\n\n  const task = {\n    index: arr.length + 1,\n    description: inputForm.value,\n    completed: false,\n  };\n\n  arr.push(task);\n  inputForm.value = '';\n  inputForm.focus();\n};\n\nconst createTasks = (todoTasks, allTasks) => {\n  allTasks.innerHTML = '';\n\n  for (let i = 0; i < todoTasks.length; i += 1) {\n    todoTasks[i].index = i + 1;\n  }\n\n  todoTasks.forEach((task) => {\n    allTasks.insertAdjacentHTML('beforeend', tasksHtml(task));\n  });\n\n  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));\n};\n\nconst getFromLocalStorage = () => {\n  const mytasks = JSON.parse(localStorage.getItem('todoTasks')) || [];\n  return mytasks;\n};\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/changeIcon.js":
/*!***********************************!*\
  !*** ./src/modules/changeIcon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst changeIcon = (todoTasks) => {\n  const allDots = document.querySelectorAll('.dots');\n  const btnDelete = document.querySelectorAll('.delete');\n  for (let i = 0; i < todoTasks.length; i += 1) {\n    allDots[i].addEventListener('click', () => {\n      allDots[i].classList.remove('dots');\n      allDots[i].classList.add('deletedot');\n      btnDelete[i].style.display = 'unset';\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeIcon);\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/changeIcon.js?");

/***/ }),

/***/ "./src/modules/cleardelSave.js":
/*!*************************************!*\
  !*** ./src/modules/cleardelSave.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleardelete\": () => (/* binding */ cleardelete),\n/* harmony export */   \"saveChanges\": () => (/* binding */ saveChanges)\n/* harmony export */ });\nconst cleardelete = (e) => {\n  const dota = document.querySelectorAll('.deletedot');\n  const toDelete = document.querySelectorAll('.delete');\n  if (e.target.classList.contains('deletedot') || e.target.classList.contains('delete')) {\n    return;\n  } dota.forEach((dot) => {\n    dot.classList.remove('deletedot');\n    dot.classList.add('dots');\n  });\n  toDelete.forEach((element) => { element.style.display = 'none'; });\n};\n\nconst saveChanges = (e, todoTasks) => {\n  if (e.target.classList.contains('input-list')) {\n    const inputList = Array.from(document.querySelectorAll('.input-list'));\n    todoTasks[inputList.indexOf(e.target)].description = e.target.value;\n    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));\n  }\n};\n\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/cleardelSave.js?");

/***/ }),

/***/ "./src/modules/drag.js":
/*!*****************************!*\
  !*** ./src/modules/drag.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrFromLocalStorage\": () => (/* binding */ arrFromLocalStorage),\n/* harmony export */   \"dragOver\": () => (/* binding */ dragOver),\n/* harmony export */   \"dragStart\": () => (/* binding */ dragStart),\n/* harmony export */   \"dragend\": () => (/* binding */ dragend)\n/* harmony export */ });\nconst dragCont = document.querySelector('.tasks');\n\nconst dragStart = (e) => {\n  if (e.target.classList.contains('draggable')) {\n    e.target.classList.remove('draggable');\n    e.target.classList.add('dragging');\n    e.target.childNodes[3].style.backgroundColor = '#c6c8cb';\n  }\n};\n\nconst dragend = (e) => {\n  if (e.target.classList.contains('dragging')) {\n    e.target.classList.remove('dragging');\n    e.target.classList.add('draggable');\n    e.target.childNodes[3].style.backgroundColor = 'white';\n  }\n};\n\nconst arrFromLocalStorage = () => {\n  const addedTasks = JSON.parse(localStorage.getItem('todoTasks'));\n  const lists = [...document.querySelectorAll('.list')];\n  const arrayOfInputs = [];\n  const arrayOfBooleans = [];\n  lists.forEach((element) => {\n    arrayOfInputs.push(element.childNodes[3].value);\n    arrayOfBooleans.push(element.childNodes[1].checked);\n  });\n  for (let i = 0; i < addedTasks.length; i += 1) {\n    addedTasks[i].description = arrayOfInputs[i];\n    addedTasks[i].completed = arrayOfBooleans[i];\n  }\n  localStorage.setItem('todoTasks', JSON.stringify(addedTasks));\n};\n\nconst dragAfterElement = (dragCont, y) => {\n  const draggableElements = [...dragCont.querySelectorAll('.draggable:not(.dragging)')];\n  return draggableElements.reduce((closest, child) => {\n    const box = child.getBoundingClientRect();\n    const offset = y - box.top - box.height / 2;\n    if (offset < 0 && offset > closest.offset) {\n      return { offset, element: child };\n    }\n    return closest;\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\n};\n\nconst dragOver = (e) => {\n  const draggable = document.querySelector('.dragging');\n  const afterElement = dragAfterElement(dragCont, e.clientY);\n  if (afterElement === null) {\n    dragCont.appendChild(draggable);\n  } else {\n    dragCont.insertBefore(draggable, afterElement);\n  }\n};\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/drag.js?");

/***/ }),

/***/ "./src/modules/setChecked.js":
/*!***********************************!*\
  !*** ./src/modules/setChecked.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setChecked = (arr) => {\n  for (let i = 0; i < arr.length; i += 1) {\n    const currenttsk = document.querySelectorAll('.check');\n    if (arr[i].completed === true) {\n      currenttsk[i].checked = true;\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setChecked);\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/setChecked.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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