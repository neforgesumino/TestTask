/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./style/fontsforcss.css":
/*!**********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style/fontsforcss.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_Exo2_0_Thin_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/Exo2.0-Thin.otf */ \"./fonts/Exo2.0-Thin.otf\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Exo2_0_Thin_otf__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\r\\n    font-family: 'Exo 2.0';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('opentype');\\r\\n    font-style: normal;\\r\\n  }\\r\\n  \", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style/fontsforcss.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./style/style.css":
/*!****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style/style.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fontsforcss_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fontsforcss.css */ \"../node_modules/css-loader/dist/cjs.js!./style/fontsforcss.css\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_backpic_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/backpic.jpg */ \"./images/backpic.jpg\");\n/* harmony import */ var _images_cat_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/cat.jpg */ \"./images/cat.jpg\");\n// Imports\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fontsforcss_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_backpic_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_cat_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\r\\n  -webkit-box-sizing: border-box;\\r\\n          box-sizing: border-box;\\r\\n}\\r\\n\\r\\n*, *:before, *:after {\\r\\n  -webkit-box-sizing: inherit;\\r\\n          box-sizing: inherit;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n    height: 100vh;\\r\\n}\\r\\n\\r\\n.main-page {\\r\\n  width: 100%;\\r\\n  min-width: 340px;\\r\\n  height: 100%;\\r\\n  padding: 0;\\r\\n  margin: 0 auto;\\r\\n  font-family: 'Trebuchet MS', 'Arial', sans-serif;\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  background-color: #000000;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: repeat;\\r\\n  background-position: 0 0;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  -webkit-box-align: center;\\r\\n      -ms-flex-align: center;\\r\\n          align-items: center;\\r\\n  -webkit-box-pack: center;\\r\\n      -ms-flex-pack: center;\\r\\n          justify-content: center;\\r\\n}\\r\\n\\r\\n.main-page::before {\\r\\n  position: absolute;\\r\\n  content:'';\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  min-height: inherit;\\r\\n  background: linear-gradient( to top, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%);\\r\\n  z-index: -1;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1200px) {\\r\\n  body {\\r\\n    height: 100vh;\\r\\n  }\\r\\n}\\r\\n\\r\\n.for-purchase {\\r\\n  width: inherit;\\r\\n  padding-top: 20px;\\r\\n  padding-bottom: 20px;\\r\\n  min-width: inherit;\\r\\n  max-width: 1300px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.for-purchase__title {\\r\\n  font-size: 36px;\\r\\n  line-height: 36px;\\r\\n  font-family: 'Exo 2.0', sans-serif;\\r\\n  font-weight: normal;\\r\\n  color: #ffffff;\\r\\n  text-align: center;\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 27px;\\r\\n  text-shadow: 0px 1px 1px black;\\r\\n\\r\\n}\\r\\n\\r\\n.for-purchase__list {\\r\\n  width: inherit;\\r\\n}\\r\\n\\r\\n.for-purchase__item {\\r\\n  width: 100%;\\r\\n  max-width: 320px;\\r\\n  min-height: 513px;\\r\\n  margin: 0 auto 50px;\\r\\n  padding-top: 4px;\\r\\n  padding-left: 4px;\\r\\n}\\r\\n\\r\\n.default {\\r\\n content:\\\"\\\";\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--disabled  {\\r\\n  pointer-events: none;\\r\\n  background-image: linear-gradient(to top 20% #b3b3b3);\\r\\n  color: #b3b3b3;\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--disabled span {\\r\\n  color: #b3b3b3;\\r\\n}\\r\\n\\r\\n\\r\\n.for-purchase__item-card {\\r\\n  width: 312px;\\r\\n  border-radius: 10px;\\r\\n  padding-left: 45px;\\r\\n  padding-right: 45px;\\r\\n  padding-top: 20px;\\r\\n  color: #666666;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: bottom 0  left 0;\\r\\n  min-height: 472px;\\r\\n  margin-bottom: 19px;\\r\\n  display: block;\\r\\n  cursor: pointer;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.for-purchase__item-card::after {\\r\\n  content: \\\"\\\";\\r\\n  background: linear-gradient(135deg, transparent 30px, #f2f2f2 0);\\r\\n  position: absolute;\\r\\n  border-radius: 10px;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  z-index: -1;\\r\\n}\\r\\n\\r\\n.for-purchase__item-card::before {\\r\\n  content: '';\\r\\n  width: 320px;\\r\\n  min-height: 480px;\\r\\n  height: calc(100% + 6px);\\r\\n  z-index: -1;\\r\\n  border-radius: 10px;\\r\\n  position: absolute;\\r\\n  top: -4px;\\r\\n  left: -4px;\\r\\n  background-color: #1698d9;\\r\\n  background:linear-gradient(135deg, transparent 31px, #1698d9 0);\\r\\n}\\r\\n\\r\\n.for-purchase__item-card:hover::before,\\r\\n.for-purchase__item-card:focus::before {\\r\\n  background-color: #2ea8e6;\\r\\n  background:linear-gradient(135deg, transparent 31px, #2ea8e6 0);\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--disabled::before,\\r\\n.for-purchase__item-card--disabled::before,\\r\\n.for-purchase__item-card--disabled:focus::before {\\r\\n  background-color: #b3b3b3;\\r\\n  background:linear-gradient(135deg, transparent 31px, #b3b3b3 0);\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--selected::before {\\r\\n  background-color: #d91667;\\r\\n  background:linear-gradient(135deg, transparent 31px, #d91667 0);\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--selected:hover::before,\\r\\n.for-purchase__item-card--selected:focus::before {\\r\\n  background-color: #e62e7a;\\r\\n  background:linear-gradient(135deg, transparent 31px, #e62e7a 0);\\r\\n}\\r\\n\\r\\n.for-purchase__item-desc {\\r\\n  font-size: 13px;\\r\\n  line-height: 13px;\\r\\n  text-align: center;\\r\\n  text-shadow: -1px 2px 0 rgba(0, 0, 0, 1);\\r\\n  color: #ffffff;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.for-purchase__item-desc--disabled {\\r\\n  color: #ffff66;\\r\\n}\\r\\n\\r\\n.for-purchase__item .for-purchase__item-desc--selected,\\r\\n.for-purchase__item .for-purchase__item-desc--disabled,\\r\\n.for-purchase__item-card--selected ~ .for-purchase__item-desc--disabled,\\r\\n.for-purchase__item-card--disabled ~ .for-purchase__item-desc--selected,\\r\\n.for-purchase__item-card--selected ~ .for-purchase__item-desc,\\r\\n.for-purchase__item-card--disabled ~ .for-purchase__item-desc {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--selected ~ .for-purchase__item-desc--selected,\\r\\n.for-purchase__item-card--disabled ~ .for-purchase__item-desc--disabled {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.for-purchase__button-text {\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  padding: 0;\\r\\n  padding-bottom: 1px;\\r\\n  color: #1698d9;\\r\\n  font-weight: bold;\\r\\n  border-bottom: 1px dashed #1698d9;\\r\\n  text-shadow: -1px 2px 0 rgba(0, 0, 0, 1);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 720px) {\\r\\n  .for-purchase__list {\\r\\n    max-width: 720px;\\r\\n    margin: 0 auto;\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: center;\\r\\n    -ms-flex-wrap: wrap;\\r\\n        flex-wrap: wrap;\\r\\n    -webkit-box-pack: center;\\r\\n        -ms-flex-pack: center;\\r\\n            justify-content: center;\\r\\n  }\\r\\n\\r\\n  .for-purchase__item {\\r\\n    width: 320px;\\r\\n    margin-left: 0;\\r\\n    margin-right: 0;\\r\\n  }\\r\\n\\r\\n  .for-purchase__item:nth-child(1) {\\r\\n    margin-right: 6.25%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1200px) {\\r\\n  .for-purchase {\\r\\n    padding: 0;\\r\\n  }\\r\\n\\r\\n  .for-purchase__list {\\r\\n    max-width: 1120px;\\r\\n  }\\r\\n\\r\\n  .for-purchase__item,\\r\\n  .for-purchase__item:nth-child(1) {\\r\\n    margin-right: 80px;\\r\\n    margin-bottom: 0;\\r\\n  }\\r\\n\\r\\n  .for-purchase__item:nth-child(3) {\\r\\n    margin-right: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.product-card {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.product-card__desc {\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 19px;\\r\\n  font-size: 16px;\\r\\n  line-height: 18px;\\r\\n}\\r\\n\\r\\n.product-card__desc--focus {\\r\\n  color: #e52e7a;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.product-card__title {\\r\\n  font-size: 48px;\\r\\n  line-height: 31px;\\r\\n  font-weight: bold;\\r\\n  color: #000000;\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 12px;\\r\\n}\\r\\n\\r\\n.product-card__filling {\\r\\n  margin: 0;\\r\\n  margin-bottom: 16px;\\r\\n  font-size: 24px;\\r\\n  font-weight: 700;\\r\\n  color: #000000;\\r\\n}\\r\\n\\r\\n.product-card__info {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin-top: 0;\\r\\n  margin-bottom: 18px;\\r\\n  min-height: 49px;\\r\\n}\\r\\n\\r\\n.product-card__image {\\r\\n  display: block;\\r\\n  margin-left: -45px;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\n.product-card__weight {\\r\\n  font-size: 42px;\\r\\n  line-height: 21px;\\r\\n  font-weight: normal;\\r\\n  text-align: center;\\r\\n  color: #ffffff;\\r\\n  background-color: #1698d9;\\r\\n  border-radius: 50%;\\r\\n  flex-wrap: wrap;\\r\\n  align-items: center;\\r\\n  -ms-flex-wrap: wrap;\\r\\n  flex-wrap: wrap;\\r\\n-webkit-box-align: center;\\r\\n  -ms-flex-align: center;\\r\\n      align-items: center;\\r\\n  width: 81px;\\r\\n  height: 81px;\\r\\n  padding: 23px 5px;\\r\\n  position: absolute;\\r\\n  bottom: 11px;\\r\\n  right: 11px;\\r\\n}\\r\\n\\r\\n.product-card__weight span {\\r\\n  font-size: 21px;\\r\\n  line-height: 21px;\\r\\n  display: inline-flex;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.for-purchase__item-card:hover .product-card__weight,\\r\\n.for-purchase__item-card:focus .product-card__weight {\\r\\n  background-color: #2ea8e6;\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--disabled .product-card__desc,\\r\\n.for-purchase__item-card--disabled .product-card__title,\\r\\n.for-purchase__item-card--disabled .product-card__info  {\\r\\n  color: #b3b3b3;\\r\\n\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--disabled .product-card__weight,\\r\\n.for-purchase__item-card--disabled:focus .product-card__weight {\\r\\n  background-color: #b3b3b3;\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--selected .product-card__weight {\\r\\n  background-color: #d91667;\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--selected:hover .product-card__desc,\\r\\n.for-purchase__item-card--selected:focus .product-card__desc {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--selected:hover .product-card__desc--focus,\\r\\n.for-purchase__item-card--selected:focus .product-card__desc--focus {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.for-purchase__item-card--selected:hover:not(.just-clicked) .product-card__weight,\\r\\n.for-purchase__item-card--selected:focus:not(.just-clicked) .product-card__weight {\\r\\n  background-color: #e62e7a;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./fonts/Exo2.0-Thin.otf":
/*!*******************************!*\
  !*** ./fonts/Exo2.0-Thin.otf ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"51c257bfa8ec3e0cfb4bb850711b22c7.otf\");\n\n//# sourceURL=webpack:///./fonts/Exo2.0-Thin.otf?");

/***/ }),

/***/ "./images/backpic.jpg":
/*!****************************!*\
  !*** ./images/backpic.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0b57ceebc514e2048858b1f6a008d5c1.jpg\");\n\n//# sourceURL=webpack:///./images/backpic.jpg?");

/***/ }),

/***/ "./images/cat.jpg":
/*!************************!*\
  !*** ./images/cat.jpg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dfe353836192af59053a4657e7c29597.jpg\");\n\n//# sourceURL=webpack:///./images/cat.jpg?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n  \r\n\r\n/* TOGGLE FOR CARD ONE */\r\nconst buyItem = document.querySelector('.product-card-first');\r\nconst ProductToSelect = document.querySelector('.for-purchase__item-card');\r\n  \r\n  buyItem.addEventListener('click', ()=>{\r\n      ProductToSelect.classList.toggle(\"for-purchase__item-card--selected\");\r\n   });\r\n\r\n\r\n/* TOGGLE FOR CARD TWO */\r\n\r\nconst buyItem2 = document.querySelector('.product-card-second');\r\nconst ProductToSelect2 = document.querySelector('.for-purchase__item-card--selected');\r\n  \r\n  buyItem2.addEventListener('click', ()=>{\r\n      ProductToSelect2.classList.toggle(\"for-purchase__item-card--selected\");\r\n   });\r\n\r\n\r\n\r\n\r\ndocument.addEventListener ('DOMContentLoaded', function () {\r\n\r\n  const cards = document.querySelectorAll ('.for-purchase__item-card--selected')\r\n\r\n    for (let i = 0; i < cats.length; i++) { // в IE11 нет for..of\r\n\r\n      const card = cards[i]\r\n\r\n        /*  Класс .just-clicked означает, что мы только что нажали на кота, но курсор ещё не убрали,\r\n            таким образом указываем, что надпись «котэ не одобряет» показывать не надо. */\r\n\r\n            card.onclick      = function () { card.classList.add    ('just-clicked') }\r\n            card.onmouseleave = function () { card.classList.remove ('just-clicked') }\r\n        }\r\n    })\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./style/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./style/style.css?");

/***/ })

/******/ });