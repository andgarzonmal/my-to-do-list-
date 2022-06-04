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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_ChangeStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ChangeStatus.js */ \"./src/modules/ChangeStatus.js\");\n/* harmony import */ var _modules_setChecked_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/setChecked.js */ \"./src/modules/setChecked.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_changeIcon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changeIcon.js */ \"./src/modules/changeIcon.js\");\n/* harmony import */ var _modules_cleardelSave_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cleardelSave.js */ \"./src/modules/cleardelSave.js\");\n/* harmony import */ var _modules_drag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/drag.js */ \"./src/modules/drag.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst dragContainer = document.querySelector('.tasks');\r\nconst form = document.querySelector('.form');\r\nconst allTasks = document.querySelector('.tasks');\r\nconst savedLists = JSON.parse(localStorage.getItem('todoTasks'));\r\nlet todoTasks = (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)();\r\n\r\nconst del = (e) => {\r\n  if (e.target.classList.contains('delete')) {\r\n    let arrOfTasks = (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)()\r\n    const deletebtns = Array.from(document.querySelectorAll('.delete'));\r\n    arrOfTasks = arrOfTasks.filter((x) => x.index !== deletebtns.indexOf(e.target) + 1);\r\n    e.target.parentNode.remove();\r\n    for (let i = 0; i < arrOfTasks.length; i += 1) {\r\n      arrOfTasks[i].index = i + 1;\r\n    }\r\n    localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));\r\n  }\r\n};\r\n\r\nconst clearAll = (e) => {\r\n  if (e.target.classList.contains('clear')) {\r\n    let arrOfTasks = (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)()\r\n    const allToDelete = document.querySelectorAll('.list');\r\n    allToDelete.forEach((toDelete) => {\r\n      if (toDelete.childNodes[1].checked) {\r\n        toDelete.remove();\r\n        arrOfTasks = arrOfTasks.filter((x) => x.completed !== true);\r\n      }\r\n      for (let i = 0; i < arrOfTasks.length; i += 1) {\r\n        arrOfTasks[i].index = i + 1;\r\n      }\r\n      localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));\r\n    });\r\n  }\r\n};\r\n\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__.addTask)();\r\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__.createTasks)(allTasks);\r\n  (0,_modules_changeIcon_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n});\r\n\r\nallTasks.addEventListener('change', (e) => {\r\n  (0,_modules_ChangeStatus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e);\r\n  (0,_modules_setChecked_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\nallTasks.addEventListener('input', (e) => {\r\n  (0,_modules_cleardelSave_js__WEBPACK_IMPORTED_MODULE_5__.saveChanges)(e);\r\n});\r\n\r\ndocument.addEventListener('click', (e) => {\r\n  (0,_modules_cleardelSave_js__WEBPACK_IMPORTED_MODULE_5__.cleardelete)(e);\r\n  clearAll(e);\r\n  del(e);\r\n});\r\n\r\ndocument.addEventListener('dragstart', (e) => {\r\n  (0,_modules_drag_js__WEBPACK_IMPORTED_MODULE_6__.dragStart)(e);\r\n});\r\n\r\ndocument.addEventListener('dragend', (e) => {\r\n  (0,_modules_drag_js__WEBPACK_IMPORTED_MODULE_6__.dragend)(e);\r\n  (0,_modules_drag_js__WEBPACK_IMPORTED_MODULE_6__.arrFromLocalStorage)();\r\n});\r\n\r\ndragContainer.addEventListener('dragover', (e) => {\r\n  e.preventDefault();\r\n  (0,_modules_drag_js__WEBPACK_IMPORTED_MODULE_6__.dragOver)(e);\r\n});\r\n\r\nif (savedLists !== null) {\r\n  todoTasks = savedLists;\r\n  todoTasks.forEach((item) => {\r\n    allTasks.insertAdjacentHTML('beforeend', (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__.tasksHtml)(item));\r\n  });\r\n  (0,_modules_setChecked_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_changeIcon_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n}\r\n\n\n//# sourceURL=webpack://my-to-do-list-/./src/index.js?");

/***/ }),

/***/ "./src/modules/ChangeStatus.js":
/*!*************************************!*\
  !*** ./src/modules/ChangeStatus.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\r\n\r\nconst changeStatus = (e) => {\r\n  if (e.target.classList.contains('check')) {\r\n    let arrOfTasks = (0,_add_js__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)()\r\n    for (let i = 0; i < arrOfTasks.length; i += 1) {\r\n      const allbox = Array.from(document.querySelectorAll('.check'));\r\n      if (allbox[i].checked && arrOfTasks[i].completed === false) {\r\n        arrOfTasks[i].completed = true;\r\n        localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));\r\n      } else if (allbox[i].checked === false) {\r\n        arrOfTasks[i].completed = false;\r\n        localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));\r\n      }\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeStatus);\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/ChangeStatus.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"createTasks\": () => (/* binding */ createTasks),\n/* harmony export */   \"getFromLocalStorage\": () => (/* binding */ getFromLocalStorage),\n/* harmony export */   \"tasksHtml\": () => (/* binding */ tasksHtml)\n/* harmony export */ });\nconst inputForm = document.querySelector('.input-form');\r\n\r\nconst tasksHtml = ({ index, description }) => `\r\n<li class=\"list draggable\" id=\"${index}\" draggable=\"true\" data-id=\"ee\" >\r\n  <input type=\"checkbox\" name=\"task\" class=\"check\" data-asign=\"${index}\" >\r\n  <input type=\"text\" class=\"input-list\" value=\"${description}\">\r\n  <i class=\"material-icons dots\">\r\n    more_vert\r\n  </i>\r\n  <i class=\"material-icons delete\" >\r\n    delete\r\n  </i> \r\n</li>\r\n`;\r\n\r\nconst addTask = () => {\r\n  if (inputForm.value.trim() === '') {\r\n    return;\r\n  }\r\n  \r\n  let arrOfTasks = getFromLocalStorage()\r\n\r\n  if (arrOfTasks.some((task) => task.description === inputForm.value)) {\r\n    alert('task already added');\r\n    return;\r\n  }\r\n\r\n  const task = {\r\n    index: arrOfTasks.length + 1,\r\n    description: inputForm.value,\r\n    completed: false,\r\n  };\r\n\r\n  arrOfTasks.push(task);\r\n  inputForm.value = '';\r\n  inputForm.focus();\r\n  localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));\r\n};\r\n\r\nconst createTasks = (allTasks) => {\r\n  allTasks.innerHTML = '';\r\n  let arrOfTasks = getFromLocalStorage()\r\n  console.log(arrOfTasks);\r\n  for (let i = 0; i < arrOfTasks.length; i += 1) {\r\n    arrOfTasks[i].index = i + 1;\r\n  }\r\n\r\n  arrOfTasks.forEach((task) => {\r\n    allTasks.insertAdjacentHTML('beforeend', tasksHtml(task));\r\n  });\r\n\r\n};\r\n\r\nconst getFromLocalStorage = () => {\r\n  const mytasks = JSON.parse(localStorage.getItem('todoTasks')) || [];\r\n  return mytasks;\r\n};\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/changeIcon.js":
/*!***********************************!*\
  !*** ./src/modules/changeIcon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\r\n\r\nconst changeIcon = () => {\r\n  let arrOfTasks = (0,_add_js__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)()\r\n  const allDots = document.querySelectorAll('.dots');\r\n  const btnDelete = document.querySelectorAll('.delete');\r\n  for (let i = 0; i < arrOfTasks.length; i += 1) {\r\n    allDots[i].addEventListener('click', () => {\r\n      allDots[i].classList.remove('dots');\r\n      allDots[i].classList.add('deletedot');\r\n      btnDelete[i].style.display = 'unset';\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeIcon);\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/changeIcon.js?");

/***/ }),

/***/ "./src/modules/cleardelSave.js":
/*!*************************************!*\
  !*** ./src/modules/cleardelSave.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleardelete\": () => (/* binding */ cleardelete),\n/* harmony export */   \"saveChanges\": () => (/* binding */ saveChanges)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\r\n\r\nconst cleardelete = (e) => {\r\n  const dota = document.querySelectorAll('.deletedot');\r\n  const toDelete = document.querySelectorAll('.delete');\r\n  if (e.target.classList.contains('deletedot') || e.target.classList.contains('delete')) {\r\n    return;\r\n  } dota.forEach((dot) => {\r\n    dot.classList.remove('deletedot');\r\n    dot.classList.add('dots');\r\n  });\r\n  toDelete.forEach((element) => { element.style.display = 'none'; });\r\n};\r\n\r\nconst saveChanges = (e) => {\r\n  if (e.target.classList.contains('input-list')) {\r\n    let arrOfTasks = (0,_add_js__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)()\r\n    const inputList = Array.from(document.querySelectorAll('.input-list'));\r\n    arrOfTasks[inputList.indexOf(e.target)].description = e.target.value;\r\n    localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/cleardelSave.js?");

/***/ }),

/***/ "./src/modules/drag.js":
/*!*****************************!*\
  !*** ./src/modules/drag.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrFromLocalStorage\": () => (/* binding */ arrFromLocalStorage),\n/* harmony export */   \"dragOver\": () => (/* binding */ dragOver),\n/* harmony export */   \"dragStart\": () => (/* binding */ dragStart),\n/* harmony export */   \"dragend\": () => (/* binding */ dragend)\n/* harmony export */ });\nconst dragCont = document.querySelector('.tasks');\r\n\r\nconst dragStart = (e) => {\r\n  if (e.target.classList.contains('draggable')) {\r\n    e.target.classList.remove('draggable');\r\n    e.target.classList.add('dragging');\r\n    e.target.childNodes[3].style.backgroundColor = '#c6c8cb';\r\n  }\r\n};\r\n\r\nconst dragend = (e) => {\r\n  if (e.target.classList.contains('dragging')) {\r\n    e.target.classList.remove('dragging');\r\n    e.target.classList.add('draggable');\r\n    e.target.childNodes[3].style.backgroundColor = 'white';\r\n  }\r\n};\r\n\r\nconst arrFromLocalStorage = () => {\r\n  const addedTasks = JSON.parse(localStorage.getItem('todoTasks'));\r\n  const lists = [...document.querySelectorAll('.list')];\r\n  const arrayOfInputs = [];\r\n  const arrayOfBooleans = [];\r\n  lists.forEach((element) => {\r\n    arrayOfInputs.push(element.childNodes[3].value);\r\n    arrayOfBooleans.push(element.childNodes[1].checked);\r\n  });\r\n  for (let i = 0; i < addedTasks.length; i += 1) {\r\n    addedTasks[i].description = arrayOfInputs[i];\r\n    addedTasks[i].completed = arrayOfBooleans[i];\r\n  }\r\n  localStorage.setItem('todoTasks', JSON.stringify(addedTasks));\r\n};\r\n\r\nconst dragAfterElement = (dragCont, y) => {\r\n  const draggableElements = [...dragCont.querySelectorAll('.draggable:not(.dragging)')];\r\n  return draggableElements.reduce((closest, child) => {\r\n    const box = child.getBoundingClientRect();\r\n    const offset = y - box.top - box.height / 2;\r\n    if (offset < 0 && offset > closest.offset) {\r\n      return { offset, element: child };\r\n    }\r\n    return closest;\r\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\r\n};\r\n\r\nconst dragOver = (e) => {\r\n  const draggable = document.querySelector('.dragging');\r\n  const afterElement = dragAfterElement(dragCont, e.clientY);\r\n  if (afterElement === null) {\r\n    dragCont.appendChild(draggable);\r\n  } else {\r\n    dragCont.insertBefore(draggable, afterElement);\r\n  }\r\n};\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/drag.js?");

/***/ }),

/***/ "./src/modules/setChecked.js":
/*!***********************************!*\
  !*** ./src/modules/setChecked.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setChecked = () => {\r\n  let arrOfTasks = getFromLocalStorage()\r\n  for (let i = 0; i < arrOfTasks.length; i += 1) {\r\n    const currenttsk = document.querySelectorAll('.check');\r\n    if (arrOfTasks[i].completed === true) {\r\n      currenttsk[i].checked = true;\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setChecked);\n\n//# sourceURL=webpack://my-to-do-list-/./src/modules/setChecked.js?");

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