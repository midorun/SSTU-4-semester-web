/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./components/App/App.css":
/*!***********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/App/App.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Roboto;\r\n    background: #552ec2ec;\r\n    color: #ffffff;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    padding-inline-start: 0;\r\n}\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    max-width: 1110px;\r\n}", "",{"version":3,"sources":["webpack://./components/App/App.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Roboto;\r\n    background: #552ec2ec;\r\n    color: #ffffff;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    padding-inline-start: 0;\r\n}\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    max-width: 1110px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/FilmsItem/FilmsItem.css":
/*!***********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/FilmsItem/FilmsItem.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".films-item:not(:nth-child(3n+3)) {\r\n    margin-right: 30px;\r\n}\r\n\r\n.films-item {\r\n    margin-top: 30px;\r\n    padding: 20px 10px;\r\n    width: 350px;\r\n    min-height: 450px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid #000000;\r\n    border-radius: 25px;\r\n    border: 4px solid #6c81e7;\r\n\r\n}\r\n\r\n.films-item span:not(:first-child) {\r\n    margin-top: 10px;\r\n}\r\n\r\n.films-item-delete {\r\n    margin: 0 auto;\r\n    margin-top: auto;\r\n    height: 30px;\r\n    width: 200px;\r\n    border: none;\r\n    border-radius: 15px;\r\n    background-color: #f44336ce;\r\n    color: #ffffff;\r\n    transition: all .3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.films-item-delete:hover {\r\n    background-color: #f43636;\r\n}", "",{"version":3,"sources":["webpack://./components/FilmsItem/FilmsItem.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;;AAE7B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,2BAA2B;IAC3B,cAAc;IACd,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[".films-item:not(:nth-child(3n+3)) {\r\n    margin-right: 30px;\r\n}\r\n\r\n.films-item {\r\n    margin-top: 30px;\r\n    padding: 20px 10px;\r\n    width: 350px;\r\n    min-height: 450px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid #000000;\r\n    border-radius: 25px;\r\n    border: 4px solid #6c81e7;\r\n\r\n}\r\n\r\n.films-item span:not(:first-child) {\r\n    margin-top: 10px;\r\n}\r\n\r\n.films-item-delete {\r\n    margin: 0 auto;\r\n    margin-top: auto;\r\n    height: 30px;\r\n    width: 200px;\r\n    border: none;\r\n    border-radius: 15px;\r\n    background-color: #f44336ce;\r\n    color: #ffffff;\r\n    transition: all .3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.films-item-delete:hover {\r\n    background-color: #f43636;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/FilmsList/FilmsList.css":
/*!***********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/FilmsList/FilmsList.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".films {\r\n    margin-top: 100px;\r\n}\r\n\r\n.films-list {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    /* justify-content: center; */\r\n    flex-wrap: wrap;\r\n\r\n}\r\n\r\n.films-controls {\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.films-controls-add {\r\n    position: relative;\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #30ee3a;\r\n    border: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n.films-controls-add:before,\r\n.films-controls-add::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: #ffffff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.films-controls-add:before {\r\n    width: 35px;\r\n    height: 4px;\r\n}\r\n\r\n.films-controls-add::after {\r\n    width: 4px;\r\n    height: 35px;\r\n}", "",{"version":3,"sources":["webpack://./components/FilmsList/FilmsList.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,6BAA6B;IAC7B,eAAe;;AAEnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,WAAW;AACf;;AAEA;IACI,UAAU;IACV,YAAY;AAChB","sourcesContent":[".films {\r\n    margin-top: 100px;\r\n}\r\n\r\n.films-list {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    /* justify-content: center; */\r\n    flex-wrap: wrap;\r\n\r\n}\r\n\r\n.films-controls {\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.films-controls-add {\r\n    position: relative;\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #30ee3a;\r\n    border: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n.films-controls-add:before,\r\n.films-controls-add::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: #ffffff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.films-controls-add:before {\r\n    width: 35px;\r\n    height: 4px;\r\n}\r\n\r\n.films-controls-add::after {\r\n    width: 4px;\r\n    height: 35px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/Form/Form.css":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/Form/Form.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form {\r\n    margin: 0 auto;\r\n    width: 320px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 1px solid;\r\n    background-color: #535151;\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n.form input {\r\n    width: 300px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.form button {\r\n    margin-top: 10px;\r\n}\r\n\r\n.active {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}", "",{"version":3,"sources":["webpack://./components/Form/Form.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;;;;;;AAM7B;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB","sourcesContent":[".form {\r\n    margin: 0 auto;\r\n    width: 320px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 1px solid;\r\n    background-color: #535151;\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n.form input {\r\n    width: 300px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.form button {\r\n    margin-top: 10px;\r\n}\r\n\r\n.active {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./components/App/App.css":
/*!********************************!*\
  !*** ./components/App/App.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./App.css */ "../node_modules/css-loader/dist/cjs.js!./components/App/App.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./components/FilmsItem/FilmsItem.css":
/*!********************************************!*\
  !*** ./components/FilmsItem/FilmsItem.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_FilmsItem_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./FilmsItem.css */ "../node_modules/css-loader/dist/cjs.js!./components/FilmsItem/FilmsItem.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_FilmsItem_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_FilmsItem_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./components/FilmsList/FilmsList.css":
/*!********************************************!*\
  !*** ./components/FilmsList/FilmsList.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_FilmsList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./FilmsList.css */ "../node_modules/css-loader/dist/cjs.js!./components/FilmsList/FilmsList.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_FilmsList_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_FilmsList_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./components/Form/Form.css":
/*!**********************************!*\
  !*** ./components/Form/Form.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Form.css */ "../node_modules/css-loader/dist/cjs.js!./components/Form/Form.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Form_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./components/App/App.js":
/*!*******************************!*\
  !*** ./components/App/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilmsItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FilmsItem */ "./components/FilmsItem/index.js");
/* harmony import */ var _FilmsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FilmsList */ "./components/FilmsList/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Form */ "./components/Form/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./components/App/App.css");
/* harmony import */ var _FilmsList_FilmsList_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FilmsList/FilmsList.css */ "./components/FilmsList/FilmsList.css");
/* harmony import */ var _FilmsItem_FilmsItem_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FilmsItem/FilmsItem.css */ "./components/FilmsItem/FilmsItem.css");
/* harmony import */ var _Form_Form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Form/Form.css */ "./components/Form/Form.css");





// styles





class App {
    render() {
        _FilmsList__WEBPACK_IMPORTED_MODULE_1__.default.render();
        _Form__WEBPACK_IMPORTED_MODULE_2__.default.render();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App());

/***/ }),

/***/ "./components/App/index.js":
/*!*********************************!*\
  !*** ./components/App/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./components/App/App.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_App__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./components/FilmsItem/FilmsItem.js":
/*!*******************************************!*\
  !*** ./components/FilmsItem/FilmsItem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_nextId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/nextId */ "./services/nextId.js");


class FilmsItem {
    constructor(
        title = '',
        country = '',
        genre = '',
        director = '',
        script = '',
        producer = '',
        operator = '',
        composer = '',
        budget = '',
        income = '',
        age = '',
        duration = '',
        release = '',
        id = (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)()
    ) {
        this.title = title
        this.country = country
        this.genre = genre
        this.director = director
        this.script = script
        this.producer = producer
        this.operator = operator
        this.composer = composer
        this.budget = budget
        this.income = income
        this.age = age
        this.duration = duration
        this.release = release
        this.id = id;
    }

    render() {
        return (
            `
            <li data-card-id='${this.id}' class="films-item">
            <span class="title">
                Название: ${this.title}
            </span>
            <span class="country">
                Страна: ${this.country}
            </span>
            <span class="genre">
                Жанр: ${this.genre}
            </span>
            <span class="director">
                Режисер: ${this.director}
            </span>
            <span class="script">
                Сценарий: ${this.script}
            </span>
            <span class="age">
                Возрастное ограничение: ${this.age}
            </span>
            <span class="duration">
                Продолжительность: ${this.duration}
            </span>
            <span class="release">
                Дата выхода: ${this.release}
            </span>
            <button class="films-item-delete" data-film-item-id="${this.id}" >Удалить</button>
            </li>
            `
        )
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmsItem);

/* <li data-card-id='${this.id}' class="films-item">
<span class="title">
    Название: ${this.title}
</span>
<span class="country">
    Страна: ${this.country}
</span>
<span class="genre">
    Жанр: ${this.genre}
</span>
<span class="director">
    Режисер: ${this.director}
</span>
<span class="script">
    Сценарий: ${this.script}
</span>
<span class="producer">
    Продюсер: ${this.producer}
</span>
<span class="operator">
    Оператор: ${this.operator}
</span>
<span class="composer">
    Композитор: ${this.composer}
</span>
<span class="budget">
    Бюджет: ${this.budget}
</span>
<span class="income">
    Сборы: ${this.income}
</span>
<span class="age">
    Возрастное ограничение: ${this.age}
</span>
<span class="duration">
    Продолжительность: ${this.duration}
</span>
<span class="release">
    Дата выхода: ${this.release}
</span>
<button class="films-item-delete" data-film-item-id="${this.id}" >Удалить</button>
</li> */

/***/ }),

/***/ "./components/FilmsItem/index.js":
/*!***************************************!*\
  !*** ./components/FilmsItem/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilmsItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilmsItem */ "./components/FilmsItem/FilmsItem.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FilmsItem__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./components/FilmsList/FilmsList.js":
/*!*******************************************!*\
  !*** ./components/FilmsList/FilmsList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_DATA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/DATA */ "./constants/DATA.js");
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/root */ "./constants/root.js");
/* harmony import */ var _services_nextId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nextId */ "./services/nextId.js");
/* harmony import */ var _FilmsItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilmsItem */ "./components/FilmsItem/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Form */ "./components/Form/index.js");






class FilmsList {
    constructor(DATA) {
        this.DATA = DATA;
    }

    render() {

        const FilmsItems = this.DATA.map(({
            title,
            country,
            genre,
            director,
            script,
            producer,
            operator,
            composer,
            budget,
            income,
            age,
            duration,
            release,
            id }) => {
            return new _FilmsItem__WEBPACK_IMPORTED_MODULE_3__.default(
                title,
                country,
                genre,
                director,
                script,
                producer,
                operator,
                composer,
                budget,
                income,
                age,
                duration,
                release,
                id
            ).render();
        })

        _constants_root__WEBPACK_IMPORTED_MODULE_1__.FILMS.innerHTML =
            `
            <div class="container">
                <nav class="films-controls">
                    <ul>
                        <li>
                            <button id="films-controls-add" class="films-controls-add"></ button>
                        </li>
                    </ul>
                </nav>
                <ul class="films-list">
                    ${FilmsItems.join('')}
                </ul>
            </div>
        `;


    }

    removeFilmItem(id) {
        this.DATA = this.DATA.filter(item => item.id !== id);
        this.render();
        this.addEventListeners();
    }

    addFilmItem(form) {
        let formDataObj = {};

        const formFields = [...form.elements].map(input => input.id);
        const formData = [...form.elements].map(input => input.value);

        form.reset();

        formFields.forEach((field, i) => {
            formDataObj[field] = formData[i];
        })
        formDataObj['id'] = (0,_services_nextId__WEBPACK_IMPORTED_MODULE_2__.default)();

        this.DATA.push(formDataObj);
        this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        document.querySelectorAll('.film-item-delete')
            .forEach(element => {
                element.addEventListener('click', () => {
                    let id = +element.getAttribute('data-film-item-id');
                    this.removeFilmItem(id);
                })
            })
        document.querySelector('.films-controls-add')
            .addEventListener('click', () => _Form__WEBPACK_IMPORTED_MODULE_4__.default.enable());
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FilmsList(_constants_DATA__WEBPACK_IMPORTED_MODULE_0__.default));

/***/ }),

/***/ "./components/FilmsList/index.js":
/*!***************************************!*\
  !*** ./components/FilmsList/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilmsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilmsList */ "./components/FilmsList/FilmsList.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FilmsList__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./components/Form/Form.js":
/*!*********************************!*\
  !*** ./components/Form/Form.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ "./constants/root.js");
/* harmony import */ var _FilmsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FilmsList */ "./components/FilmsList/index.js");



class Form {
    constructor(params) {
        this.formElement = null;
        this.submitBtn = null;
    }

    render() {
        _constants_root__WEBPACK_IMPORTED_MODULE_0__.MODAL.innerHTML = `
            <form id="form" class="form hide">
                <input type="text" name="title" id="title" placeholder="Название">
                <input type="text" name="country" id="country" placeholder="Страна">
                <input type="text" name="genre" id="genre" placeholder="Жанр">
                <input type="text" name="director" id="director" placeholder="Режисер">
                <input type="text" name="script" id="script" placeholder="Сценарий">
                <input type="text" name="producer" id="producer" placeholder="Продюсер">
                <input type="text" name="operator" id="operator" placeholder="Оператор">
                <input type="text" name="composer" id="composer" placeholder="Композитор">
                <input type="text" name="budget" id="budget" placeholder="Бюджет">
                <input type="text" name="income" id="income" placeholder="Сборы">
                <input type="text" name="age" id="age" placeholder="Возрастное ограничение">
                <input type="text" name="duration" id="duration" placeholder="Продолжительность">
                <input type="text" name="release" id="release" placeholder="Дата выхода">
                <button id="form-btn-submit" type="submit">Добавить</button>
            </form>
        `
        this.formElement = document.getElementById('form');
        this.submitBtn = document.getElementById('form-btn-submit');
    }

    toggleClasses() {
        this.formElement.classList.toggle('hide');
        this.formElement.classList.toggle('active');
    }

    enable() {
        this.toggleClasses();
    }

    disable() {
        this.toggleClasses();
    }

    addEventListeners() {
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.disable();
            _FilmsList__WEBPACK_IMPORTED_MODULE_1__.default.addFilmItem(this.formElement);
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Form());

/***/ }),

/***/ "./components/Form/index.js":
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./components/Form/Form.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Form__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./constants/DATA.js":
/*!***************************!*\
  !*** ./constants/DATA.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_nextId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/nextId */ "./services/nextId.js");


let DATA = [
    {
        id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
        title: 'Батя',
        country: 'Россия',
        genre: 'Комедия',
        director: ' Антон Зайцев, Артем Логинов',
        script: 'История о путешествии взрослого героя к своему Бате, суровому русскому мужику, который стал отцом на заре девяностых и воспитывал своего сына так, как это делали все советские люди.',
        producer: 'Дмитрий Ефимович',
        operator: 'Александр Тананов',
        composer: 'Алексей Кестнер',
        budget: '10 000 000',
        income: '$5 015 023',
        age: '16+',
        duration: '75мин./01:15',
        release: '23 февраля 2021'
    },
    {
        id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
        title: 'Батя',
        country: 'Россия',
        genre: 'Комедия',
        director: ' Антон Зайцев, Артем Логинов',
        script: 'История о путешествии взрослого героя к своему Бате, суровому русскому мужику, который стал отцом на заре девяностых и воспитывал своего сына так, как это делали все советские люди.',
        producer: 'Дмитрий Ефимович',
        operator: 'Александр Тананов',
        composer: 'Алексей Кестнер',
        budget: '10 000 000',
        income: '$5 015 023',
        age: '16+',
        duration: '75мин./01:15',
        release: '23 февраля 2021'
    },
    {
        id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
        title: 'Батя',
        country: 'Россия',
        genre: 'Комедия',
        director: ' Антон Зайцев, Артем Логинов',
        script: 'История о путешествии взрослого героя к своему Бате, суровому русскому мужику, который стал отцом на заре девяностых и воспитывал своего сына так, как это делали все советские люди.',
        producer: 'Дмитрий Ефимович',
        operator: 'Александр Тананов',
        composer: 'Алексей Кестнер',
        budget: '10 000 000',
        income: '$5 015 023',
        age: '16+',
        duration: '75мин./01:15',
        release: '23 февраля 2021'
    },
    {
        id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
        title: 'Батя',
        country: 'Россия',
        genre: 'Комедия',
        director: ' Антон Зайцев, Артем Логинов',
        script: 'История о путешествии взрослого героя к своему Бате, суровому русскому мужику, который стал отцом на заре девяностых и воспитывал своего сына так, как это делали все советские люди.',
        producer: 'Дмитрий Ефимович',
        operator: 'Александр Тананов',
        composer: 'Алексей Кестнер',
        budget: '10 000 000',
        income: '$5 015 023',
        age: '16+',
        duration: '75мин./01:15',
        release: '23 февраля 2021'
    },
    {
        id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
        title: 'Батя',
        country: 'Россия',
        genre: 'Комедия',
        director: ' Антон Зайцев, Артем Логинов',
        script: 'История о путешествии взрослого героя к своему Бате, суровому русскому мужику, который стал отцом на заре девяностых и воспитывал своего сына так, как это делали все советские люди.',
        producer: 'Дмитрий Ефимович',
        operator: 'Александр Тананов',
        composer: 'Алексей Кестнер',
        budget: '10 000 000',
        income: '$5 015 023',
        age: '16+',
        duration: '75мин./01:15',
        release: '23 февраля 2021'
    },
    {
        id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
        title: 'Батя',
        country: 'Россия',
        genre: 'Комедия',
        director: ' Антон Зайцев, Артем Логинов',
        script: 'История о путешествии взрослого героя к своему Бате, суровому русскому мужику, который стал отцом на заре девяностых и воспитывал своего сына так, как это делали все советские люди.',
        producer: 'Дмитрий Ефимович',
        operator: 'Александр Тананов',
        composer: 'Алексей Кестнер',
        budget: '10 000 000',
        income: '$5 015 023',
        age: '16+',
        duration: '75мин./01:15',
        release: '23 февраля 2021'
    }
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DATA);

/***/ }),

/***/ "./constants/root.js":
/*!***************************!*\
  !*** ./constants/root.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HEADER": () => (/* binding */ HEADER),
/* harmony export */   "FILMS": () => (/* binding */ FILMS),
/* harmony export */   "MODAL": () => (/* binding */ MODAL)
/* harmony export */ });
const HEADER = document.getElementById('header');
const FILMS = document.getElementById('films');
const MODAL = document.getElementById('modal');

/***/ }),

/***/ "./services/nextId.js":
/*!****************************!*\
  !*** ./services/nextId.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let ID = 1;
const nextId = () => {
    return ID++;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nextId);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ "./components/App/index.js");
/* harmony import */ var _components_FilmsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FilmsList */ "./components/FilmsList/index.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Form */ "./components/Form/index.js");




_components_App__WEBPACK_IMPORTED_MODULE_0__.default.render();
_components_FilmsList__WEBPACK_IMPORTED_MODULE_1__.default.addEventListeners();
_components_Form__WEBPACK_IMPORTED_MODULE_2__.default.addEventListeners();


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map