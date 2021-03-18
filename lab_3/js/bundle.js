/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/App/App.js":
/*!*******************************!*\
  !*** ./components/App/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Films__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Films */ "./components/Films/index.js");
/* harmony import */ var _FilmsContols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FilmsContols */ "./components/FilmsContols/index.js");
/* harmony import */ var _FilmsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FilmsList */ "./components/FilmsList/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal */ "./components/Modal/index.js");
/* harmony import */ var _constants_DATA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/DATA */ "./constants/DATA.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./components/App/App.css");
/* harmony import */ var _Films_Films_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Films/Films.css */ "./components/Films/Films.css");
/* harmony import */ var _FilmsContols_FilmsControls_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FilmsContols/FilmsControls.css */ "./components/FilmsContols/FilmsControls.css");
/* harmony import */ var _FilmsList_FilmsList_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FilmsList/FilmsList.css */ "./components/FilmsList/FilmsList.css");
/* harmony import */ var _FilmsItem_FilmsItem_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FilmsItem/FilmsItem.css */ "./components/FilmsItem/FilmsItem.css");
/* harmony import */ var _Modal_Modal_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Modal/Modal.css */ "./components/Modal/Modal.css");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





 // styles








var App = /*#__PURE__*/function () {
  function App(Films, Modal, DATA) {
    _classCallCheck(this, App);

    this.Films = Films;
    this.Modal = Modal;
    this.data = DATA;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var data = localStorage.getItem('data');

      if (data) {
        this.data = JSON.parse(data);
      } else {
        localStorage.setItem('data', JSON.stringify(this.data));
      }

      this.Films.FilmsList.data = this.data;
      this.Films.FilmsList.Films = this.Films;
      this.Films.FilmsControls.Modal = this.Modal;
      this.Modal.FilmsList = this.Films.FilmsList;
      this.Films.render();
      this.Modal.render();
    }
  }, {
    key: "updateState",
    value: function updateState(data) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      this.Films.addEventListeners();
      this.Modal.addEventListeners();
    }
  }]);

  return App;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App(new _Films__WEBPACK_IMPORTED_MODULE_0__.default(new _FilmsContols__WEBPACK_IMPORTED_MODULE_1__.default(), new _FilmsList__WEBPACK_IMPORTED_MODULE_2__.default()), new _Modal__WEBPACK_IMPORTED_MODULE_3__.default(), _constants_DATA__WEBPACK_IMPORTED_MODULE_4__.default));

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

/***/ "./components/FilmsContols/FilmsControls.js":
/*!**************************************************!*\
  !*** ./components/FilmsContols/FilmsControls.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modal */ "./components/Modal/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FilmsControls = /*#__PURE__*/function () {
  function FilmsControls(Modal) {
    _classCallCheck(this, FilmsControls);

    this.Modal = Modal;
  }

  _createClass(FilmsControls, [{
    key: "render",
    value: function render() {
      return "\n \n           <ul class=\"films-controls\">\n            <li></li>\n                <li>\n                    <button id=\"films-controls-add\" class=\"films-controls-add\">\n                        <i class=\"fas fa-plus\"></i>\n                    </button>\n                </li>\n            </ul>\n           ";
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      document.querySelector('.films-controls-add').addEventListener('click', function () {
        return _this.Modal.toggleModal();
      });
    }
  }]);

  return FilmsControls;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmsControls);

/***/ }),

/***/ "./components/FilmsContols/index.js":
/*!******************************************!*\
  !*** ./components/FilmsContols/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilmsControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilmsControls */ "./components/FilmsContols/FilmsControls.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FilmsControls__WEBPACK_IMPORTED_MODULE_0__.default);

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FilmsItem = /*#__PURE__*/function () {
  function FilmsItem(_ref) {
    var _ref$title = _ref.title,
        title = _ref$title === void 0 ? '' : _ref$title,
        _ref$country = _ref.country,
        country = _ref$country === void 0 ? '' : _ref$country,
        _ref$genre = _ref.genre,
        genre = _ref$genre === void 0 ? '' : _ref$genre,
        _ref$director = _ref.director,
        director = _ref$director === void 0 ? '' : _ref$director,
        _ref$script = _ref.script,
        script = _ref$script === void 0 ? '' : _ref$script,
        _ref$producer = _ref.producer,
        producer = _ref$producer === void 0 ? '' : _ref$producer,
        _ref$operator = _ref.operator,
        operator = _ref$operator === void 0 ? '' : _ref$operator,
        _ref$composer = _ref.composer,
        composer = _ref$composer === void 0 ? '' : _ref$composer,
        _ref$budget = _ref.budget,
        budget = _ref$budget === void 0 ? '' : _ref$budget,
        _ref$income = _ref.income,
        income = _ref$income === void 0 ? '' : _ref$income,
        _ref$age = _ref.age,
        age = _ref$age === void 0 ? '' : _ref$age,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? '' : _ref$duration,
        _ref$release = _ref.release,
        release = _ref$release === void 0 ? '' : _ref$release,
        _ref$img = _ref.img,
        img = _ref$img === void 0 ? '' : _ref$img,
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)() : _ref$id;

    _classCallCheck(this, FilmsItem);

    this.title = title;
    this.country = country;
    this.genre = genre;
    this.director = director;
    this.script = script;
    this.producer = producer;
    this.operator = operator;
    this.composer = composer;
    this.budget = budget;
    this.income = income;
    this.age = age;
    this.duration = duration;
    this.release = release;
    this.img = img;
    this.id = id;
  }

  _createClass(FilmsItem, [{
    key: "render",
    value: function render() {
      return "\n            <li data-card-id='".concat(this.id, "' class=\"films-item\">\n                <span class=\"title\">").concat(this.title, "</span>\n                <hr>\n                <div class=\"films-item-img\">\n                    <span class=\"age\">").concat(this.age, "</span>\n                    <img src=\"").concat(this.img, "\" alt=\"\" >\n                </div>        \n                <div class=\"films-item-controls\">\n                    <button class=\"films-item-delete\" data-films-item-id=\"").concat(this.id, "\" >\n                        &times;\n                    </button>\n\n                    <button class=\"films-item-turn\">\n                        <i class=\"fas fa-info\"></i>\n                    </button>\n                </div>\n            </li>\n            ");
    }
  }]);

  return FilmsItem;
}();

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
/* harmony import */ var _services_nextId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/nextId */ "./services/nextId.js");
/* harmony import */ var _FilmsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FilmsItem */ "./components/FilmsItem/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var FilmsList = /*#__PURE__*/function () {
  function FilmsList(Films, data) {
    _classCallCheck(this, FilmsList);

    this.Films = Films;
    this.data = data;
  }

  _createClass(FilmsList, [{
    key: "render",
    value: function render() {
      var FilmsItems = this.data.map(function (props) {
        return new _FilmsItem__WEBPACK_IMPORTED_MODULE_1__.default(props).render();
      });
      return "\n            <ul class=\"films-list\">\n                ".concat(FilmsItems.join(''), "\n            </ul>\n            ");
    }
  }, {
    key: "removeFilmsItem",
    value: function removeFilmsItem(id) {
      this.data = this.data.filter(function (item) {
        return item.id !== id;
      });
      App.updateState(this.data);
      this.Films.render();
      this.Films.addEventListeners();
    }
  }, {
    key: "addFilmsItem",
    value: function addFilmsItem(form) {
      var formDataObj = {};

      var formFields = _toConsumableArray(form.elements).map(function (input) {
        return input.id;
      });

      var formData = _toConsumableArray(form.elements).map(function (input) {
        return input.value;
      });

      form.reset();
      formFields.forEach(function (field, i) {
        formDataObj[field] = formData[i];
      });
      formDataObj['id'] = (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)();
      this.data.push(formDataObj);
      App.updateState(this.data);
      this.Films.render();
      this.Films.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      document.querySelectorAll('.films-item-delete').forEach(function (element) {
        element.addEventListener('click', function () {
          var id = +element.getAttribute('data-films-item-id');
          console.log(id);

          _this.removeFilmsItem(id);
        });
      });
    }
  }]);

  return FilmsList;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmsList);

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

/***/ "./components/Films/Films.js":
/*!***********************************!*\
  !*** ./components/Films/Films.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ "./constants/root.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Films = /*#__PURE__*/function () {
  function Films(FilmsControls, FilmsList) {
    _classCallCheck(this, Films);

    this.FilmsControls = FilmsControls;
    this.FilmsList = FilmsList;
  }

  _createClass(Films, [{
    key: "render",
    value: function render() {
      _constants_root__WEBPACK_IMPORTED_MODULE_0__.FILMS.innerHTML = "\n            <div class=\"container\">\n                ".concat(this.FilmsControls.render(), "\n                ").concat(this.FilmsList.render(), "\n            </div>\n        ");
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      this.FilmsControls.addEventListeners();
      this.FilmsList.addEventListeners();
    }
  }]);

  return Films;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Films);

/***/ }),

/***/ "./components/Films/index.js":
/*!***********************************!*\
  !*** ./components/Films/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Films__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Films */ "./components/Films/Films.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Films__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./components/Modal/Modal.js":
/*!***********************************!*\
  !*** ./components/Modal/Modal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ "./constants/root.js");
/* harmony import */ var _FilmsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FilmsList */ "./components/FilmsList/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Modal = /*#__PURE__*/function () {
  function Modal(FilmsList) {
    _classCallCheck(this, Modal);

    this.FilmsList = FilmsList;
    this.modal = null;
    this.form = null;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      _constants_root__WEBPACK_IMPORTED_MODULE_0__.MODAL.innerHTML = "\n        <div class=\"modal\">\n            <div class=\"modal-content\">\n                <span class=\"modal-close\">&times;</span>\n                <form id=\"form\" class=\"form\">\n                    <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\">\n                    <input type=\"text\" name=\"country\" id=\"country\" placeholder=\"\u0421\u0442\u0440\u0430\u043D\u0430\">\n                    <input type=\"text\" name=\"genre\" id=\"genre\" placeholder=\"\u0416\u0430\u043D\u0440\">\n                    <input type=\"text\" name=\"director\" id=\"director\" placeholder=\"\u0420\u0435\u0436\u0438\u0441\u0435\u0440\">\n                    <input type=\"text\" name=\"script\" id=\"script\" placeholder=\"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439\">\n                    <input type=\"text\" name=\"producer\" id=\"producer\" placeholder=\"\u041F\u0440\u043E\u0434\u044E\u0441\u0435\u0440\">\n                    <input type=\"text\" name=\"operator\" id=\"operator\" placeholder=\"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\">\n                    <input type=\"text\" name=\"composer\" id=\"composer\" placeholder=\"\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440\">\n                    <input type=\"text\" name=\"budget\" id=\"budget\" placeholder=\"\u0411\u044E\u0434\u0436\u0435\u0442\">\n                    <input type=\"text\" name=\"income\" id=\"income\" placeholder=\"\u0421\u0431\u043E\u0440\u044B\">\n                    <input type=\"text\" name=\"age\" id=\"age\" placeholder=\"\u0412\u043E\u0437\u0440\u0430\u0441\u0442\u043D\u043E\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435\">\n                    <input type=\"text\" name=\"duration\" id=\"duration\" placeholder=\"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\">\n                    <input type=\"text\" name=\"release\" id=\"release\" placeholder=\"\u0414\u0430\u0442\u0430 \u0432\u044B\u0445\u043E\u0434\u0430\">\n                    <input type=\"text\" name=\"img\", id=\"img\" placeholder=\"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043F\u043E\u0441\u0442\u0435\u0440\">\n                    <button id=\"form-btn-submit\" type=\"submit\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n                </form>\n            </div>\n        </div>\n        ";
      this.modal = document.querySelector('.modal');
      this.form = document.querySelector('#form');
    }
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.modal.classList.toggle('active');
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      this.form.addEventListener('submit', function (e) {
        e.preventDefault();

        _this.toggleModal();

        _this.FilmsList.addFilmsItem(_this.form);
      });
      this.modal.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal')) {
          _this.toggleModal();
        }
      });
    }
  }]);

  return Modal;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./components/Modal/index.js":
/*!***********************************!*\
  !*** ./components/Modal/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./components/Modal/Modal.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Modal__WEBPACK_IMPORTED_MODULE_0__.default);

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

var DATA = [{
  id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
  title: 'Батя',
  country: 'Россия',
  genre: 'Комедия',
  director: ' Антон Зайцев, Артем Логинов',
  script: 'История о путешествии взрослого героя к своему Бате, суровому русскому мужику, который стал отцом на заре девяностых и воспитывал своего сына так, как это делали все советские люди.',
  producer: 'Дмитрий Ефимович',
  operator: 'Александр Тананов',
  composer: 'Алексей Кестнер',
  budget: '',
  income: '$5 015 023',
  age: '16+',
  duration: '75мин.',
  release: '23 февраля 2021',
  img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/bf609987-9456-46e5-8def-f9f7b62c96a4/300x450'
}, {
  id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
  title: 'Пара из будущего',
  country: 'Россия',
  genre: 'комедия, фантастика, мелодрама',
  director: 'Алексей Нужный',
  script: 'Недалекое будущее, 2040 год. Евгений и Александра 20 лет в браке, их отношения похожи на высохший урюк. Развестись у них тоже не получается, поскольку в будущем расторжение брака – очень дорогая услуга. Но судьба дает им шанс: Евгений и Александра попадают в прошлое, в тот самый день 20 лет назад, когда влюбленный и юный Женя сделал предложение прелестной Саше. Теперь пара из будущего хочет разлучить самих себя в молодости, но это будет непросто. Молодые будут сражаться за свою любовь.',
  producer: 'Леонид Верещагин, Антон Златопольский',
  operator: 'Юрий Коробейников',
  composer: 'Кирилл Бородулев, Евгений Бархатов',
  budget: '',
  income: '$2 173 864',
  age: '12+',
  duration: '104 мин.',
  release: '4 марта 2021',
  img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/3d742f2a-842b-42b2-8952-5168c642fa95/300x450'
}, {
  id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
  title: 'Никто',
  country: 'США',
  genre: 'боевик, триллер, криминал',
  director: 'Илья Найшуллер',
  script: 'Непримечательный и незаметный человек живёт обычной жизнью, пока однажды, спасая женщину от нападения бандитов, не отправляет одного из хулиганов в больницу. Лишь позже он узнаёт, что это был брат влиятельного гангстера, который теперь жаждет мести.',
  producer: 'Браден Афтегуд, Келли МакКормик, Боб Оденкёрк',
  operator: 'Павел Погоржельский',
  composer: 'Дэвид Бакли',
  budget: '',
  income: '',
  age: '18+',
  duration: '92 мин',
  release: '18 марта 2021',
  img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ba79433c-84c0-4ce7-b4a4-bfcfe89ca3bf/300x450'
}, {
  id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
  title: 'Райя и последний дракон',
  country: 'США',
  genre: 'мультфильм, фэнтези, боевик, комедия, приключения, семейный',
  director: 'Дон Холл, Карлос Лопес Эстрада, Пол Бриггс',
  script: 'Давным-давно в волшебной стране Кумандре бок о бок с людьми жили драконы — создатели и хранители воды. Мирной жизни пришел конец, когда появились друуны. Порождения тьмы обращали людей и драконов в каменные изваяния, и только магия драконихи Сису смогла прогнать злых созданий и расколдовать людей, но на драконов не подействовала. Кумандра раскололась на государства Сердца, Клыка, Когтя, Хребта и Хвоста, а волшебный драконий камень хранился в стране Сердца, которой правил отец Райи. Он мечтал объединить земли, но из-за человеческой жадности и зависти артефакт раскололся. Правитель каждой страны заполучил по осколку, а друуны снова стали властвовать безраздельно.',
  producer: 'Джаред Буш, Нэйтан Кертис, Питер Дель Вечо',
  operator: 'Роб Дрессель',
  composer: 'Джеймс Ньютон Ховард',
  budget: '',
  income: '$52 924 610',
  age: '6+',
  duration: '107 мин.',
  release: '3 марта 2021',
  img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/579c4f99-246d-4c3e-b401-419cda21a507/300x450'
}, {
  id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
  title: 'Айнбо. Сердце Амазонии',
  country: 'Перу, Нидерланды',
  genre: 'мультфильм, фэнтези, комедия, приключения, семейный',
  director: 'Рихард Клаус, Хосе Селада',
  script: 'Бесстрашная Айнбо родилась и выросла в таинственных амазонских джунглях. Узнав, что её родному поселку грозит опасность, она тотчас отправляется за помощью в компании удивительных зверей. Их ждёт восхождение к пылающему вулкану, встреча с могущественным духом Амазонии и схватка с мифическим чудовищем.',
  producer: 'Рихард Клаус, Сезар Селада, Хосе Селада',
  operator: '',
  composer: 'Виджай Бирепут',
  budget: '10 000 000',
  income: '$5 015 023',
  age: '6+',
  duration: '84 мин.',
  release: '3 марта 2021',
  img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/8218e593-11fb-4f8f-8e94-d8cc68f0bf16/300x450'
}, {
  id: (0,_services_nextId__WEBPACK_IMPORTED_MODULE_0__.default)(),
  title: 'Хребет дьявола',
  country: 'США',
  genre: 'ужасы',
  director: 'Брэдли Паркер',
  script: 'Группа молодых геологов, исследующих отдаленные от цивилизации места, находит городок в горах Аппалачи, который был заброшен в прошлом веке при загадочных обстоятельствах. Думая, что они нашли свою подземную Атлантиду, друзья пробуждают нечто древнее и жуткое. Научная экспедиция превращается в борьбу за выживание в месте, прозванном Хребтом дьявола.',
  producer: 'Диего Халливис, Хулио Халливис, Эду Бодегас',
  operator: 'Морган Сассер',
  composer: 'Нима Фахрара',
  budget: '',
  income: '',
  age: '18+',
  duration: '100 мин.',
  release: '5 марта 2021',
  img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b9d9e755-465d-4ab5-8dac-a24eb82aaefc/300x450'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DATA);

/***/ }),

/***/ "./constants/root.js":
/*!***************************!*\
  !*** ./constants/root.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FILMS": () => (/* binding */ FILMS),
/* harmony export */   "MODAL": () => (/* binding */ MODAL)
/* harmony export */ });
var FILMS = document.getElementById('films');
var MODAL = document.getElementById('modal');

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
var ID = 1;

var nextId = function nextId() {
  return ID++;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nextId);

/***/ }),

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

/***/ "../node_modules/css-loader/dist/cjs.js!./components/FilmsContols/FilmsControls.css":
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/FilmsContols/FilmsControls.css ***!
  \******************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".films-controls {\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.films-controls-add {\r\n    position: relative;\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #30ee3ace;\r\n    border: none;\r\n    border-radius: 50%;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.fa-plus {\r\n    font-size: 1.8rem;\r\n    color: #ffffff;\r\n}", "",{"version":3,"sources":["webpack://./components/FilmsContols/FilmsControls.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB","sourcesContent":[".films-controls {\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.films-controls-add {\r\n    position: relative;\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #30ee3ace;\r\n    border: none;\r\n    border-radius: 50%;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.fa-plus {\r\n    font-size: 1.8rem;\r\n    color: #ffffff;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".films-item hr {\r\n    width: 100%;\r\n}\r\n\r\n.films-item:not(:nth-child(3n+3)) {\r\n    margin-right: 30px;\r\n}\r\n\r\n.films-item {\r\n    margin-top: 30px;\r\n    padding: 10px;\r\n    width: 350px;\r\n    min-height: 550px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    position: relative;\r\n    border-radius: 25px;\r\n    font-weight: 700;\r\n    font-size: 1.1rem;\r\n    background: #EFF2FA;\r\n    color: #4E5983;\r\n}\r\n\r\n.films-item-img {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    width: 330px;\r\n    height: 400px;\r\n}\r\n\r\n.films-item-img img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Properties */\r\n.title {\r\n    text-align: center;\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.age {\r\n    margin: 0;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    background: #ffffff;\r\n    border-radius: 50px;\r\n    color: #000000;\r\n}\r\n\r\n/* Controls */\r\n.films-item-controls {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    height: 75px;\r\n}\r\n\r\n.films-item-turn,\r\n.films-item-delete {\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    transition: all .3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.films-item-turn {\r\n    background: #623fc2;\r\n    color: #ffffff;\r\n    outline: none;\r\n}\r\n\r\n.films-item-turn:hover {\r\n    background: #4c1bd3;\r\n}\r\n\r\n.films-item-delete {\r\n    margin-right: 100px;\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    background-color: #f44336ce;\r\n    font-size: 2.3rem;\r\n    color: #ffffff;\r\n}\r\n\r\n.films-item-delete:hover {\r\n    background-color: #f43636;\r\n}", "",{"version":3,"sources":["webpack://./components/FilmsItem/FilmsItem.css"],"names":[],"mappings":"AAAA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,cAAc;AAClB;;AAEA,aAAa;AACb;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[".films-item hr {\r\n    width: 100%;\r\n}\r\n\r\n.films-item:not(:nth-child(3n+3)) {\r\n    margin-right: 30px;\r\n}\r\n\r\n.films-item {\r\n    margin-top: 30px;\r\n    padding: 10px;\r\n    width: 350px;\r\n    min-height: 550px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    position: relative;\r\n    border-radius: 25px;\r\n    font-weight: 700;\r\n    font-size: 1.1rem;\r\n    background: #EFF2FA;\r\n    color: #4E5983;\r\n}\r\n\r\n.films-item-img {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    width: 330px;\r\n    height: 400px;\r\n}\r\n\r\n.films-item-img img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Properties */\r\n.title {\r\n    text-align: center;\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.age {\r\n    margin: 0;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    background: #ffffff;\r\n    border-radius: 50px;\r\n    color: #000000;\r\n}\r\n\r\n/* Controls */\r\n.films-item-controls {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    height: 75px;\r\n}\r\n\r\n.films-item-turn,\r\n.films-item-delete {\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    transition: all .3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.films-item-turn {\r\n    background: #623fc2;\r\n    color: #ffffff;\r\n    outline: none;\r\n}\r\n\r\n.films-item-turn:hover {\r\n    background: #4c1bd3;\r\n}\r\n\r\n.films-item-delete {\r\n    margin-right: 100px;\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    background-color: #f44336ce;\r\n    font-size: 2.3rem;\r\n    color: #ffffff;\r\n}\r\n\r\n.films-item-delete:hover {\r\n    background-color: #f43636;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".films-list {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}", "",{"version":3,"sources":["webpack://./components/FilmsList/FilmsList.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,aAAa;IACb,eAAe;AACnB","sourcesContent":[".films-list {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/Films/Films.css":
/*!***************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/Films/Films.css ***!
  \***************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".films {\r\n    margin-top: 100px;\r\n}", "",{"version":3,"sources":["webpack://./components/Films/Films.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;AACrB","sourcesContent":[".films {\r\n    margin-top: 100px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./components/Modal/Modal.css":
/*!***************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/Modal/Modal.css ***!
  \***************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1050;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-color: rgba(0, 0, 0, .5)\r\n}\r\n\r\n.modal-content {\r\n    position: relative;\r\n    max-width: 400px;\r\n    margin: 60px auto;\r\n    padding-top: 20px;\r\n    background: #6d4cc9ec;\r\n    border-radius: 25px;\r\n}\r\n\r\n.modal-close {\r\n    position: absolute;\r\n    right: 5%;\r\n    top: 1%;\r\n    font-size: 2.3rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.form {\r\n    margin: 0 auto;\r\n    padding: 15px 0;\r\n    width: 350px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.form input {\r\n    padding-left: 5px;\r\n    width: 300px;\r\n    height: 25px;\r\n    margin-top: 10px;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.form button {\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n    height: 30px;\r\n    width: 200px;\r\n    border: none;\r\n    border-radius: 15px;\r\n    background-color: #30ee3ace;\r\n    color: #ffffff;\r\n    transition: all .3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.active {\r\n    display: block;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}", "",{"version":3,"sources":["webpack://./components/Modal/Modal.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,aAAa;IACb,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB;AACJ;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,2BAA2B;IAC3B,cAAc;IACd,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB","sourcesContent":[".modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1050;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background-color: rgba(0, 0, 0, .5)\r\n}\r\n\r\n.modal-content {\r\n    position: relative;\r\n    max-width: 400px;\r\n    margin: 60px auto;\r\n    padding-top: 20px;\r\n    background: #6d4cc9ec;\r\n    border-radius: 25px;\r\n}\r\n\r\n.modal-close {\r\n    position: absolute;\r\n    right: 5%;\r\n    top: 1%;\r\n    font-size: 2.3rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.form {\r\n    margin: 0 auto;\r\n    padding: 15px 0;\r\n    width: 350px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.form input {\r\n    padding-left: 5px;\r\n    width: 300px;\r\n    height: 25px;\r\n    margin-top: 10px;\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.form button {\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n    height: 30px;\r\n    width: 200px;\r\n    border: none;\r\n    border-radius: 15px;\r\n    background-color: #30ee3ace;\r\n    color: #ffffff;\r\n    transition: all .3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.active {\r\n    display: block;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}"],"sourceRoot":""}]);
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

/***/ "./components/FilmsContols/FilmsControls.css":
/*!***************************************************!*\
  !*** ./components/FilmsContols/FilmsControls.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_FilmsControls_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./FilmsControls.css */ "../node_modules/css-loader/dist/cjs.js!./components/FilmsContols/FilmsControls.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_FilmsControls_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_FilmsControls_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./components/Films/Films.css":
/*!************************************!*\
  !*** ./components/Films/Films.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Films_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Films.css */ "../node_modules/css-loader/dist/cjs.js!./components/Films/Films.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Films_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Films_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./components/Modal/Modal.css":
/*!************************************!*\
  !*** ./components/Modal/Modal.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Modal.css */ "../node_modules/css-loader/dist/cjs.js!./components/Modal/Modal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Modal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Modal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

_components_App__WEBPACK_IMPORTED_MODULE_0__.default.render();
_components_App__WEBPACK_IMPORTED_MODULE_0__.default.addEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map