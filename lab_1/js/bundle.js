/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/array.js":
/*!*****************************!*\
  !*** ./js/modules/array.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function array(dataSelector, triggerSelector, minOutputSelector, maxOutputSelector) {
    const data = document.querySelectorAll(dataSelector);
    const trigger = document.querySelector(triggerSelector);
    const min = document.querySelector(minOutputSelector);
    const max = document.querySelector(maxOutputSelector);
    const error = document.querySelector('.array__error');

    trigger.addEventListener('click', () => {
        let hasEmptyValues;
        let tempArr = [];
        data.forEach(item => {
            console.log(item.value.length);
            if (item.value.length === 0) {
                hasEmptyValues = true;
            }
            tempArr.push(+item.value);
        });

        if (isNaN(Math.min(...tempArr)) || isNaN(Math.max(...tempArr))) {
            min.innerHTML = '';
            max.innerHTML = '';
            data.forEach(item => {
                item.classList.add('invalid');
            });
            error.innerHTML = `
        <div class="error__message">Проверьте корректность введенных данных:</div>
         `;
        }
        else {
            if (hasEmptyValues) {
                data.forEach(item => {
                    item.classList.add('invalid');
                });
                error.innerHTML = `
                <div class="error__message">Поля не должны быть пустыми</div>
                 `;
            }
            else {
                error.innerHTML = '';
                data.forEach(item => {
                    item.classList.remove('invalid');
                });
                min.textContent = Math.min(...tempArr);
                max.textContent = Math.max(...tempArr);
            }

        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (array);

/***/ }),

/***/ "./js/modules/changeUserName.js":
/*!**************************************!*\
  !*** ./js/modules/changeUserName.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function changeUserName() {
    const authInput = document.querySelector('.auth__input');
    const authButton = document.querySelector('.auth__btn');
    const authInfo = document.querySelector('.auth__info');
    const userName = document.querySelector('.profile__username');

    if (localStorage.getItem('user-name')) {
        userName.textContent = localStorage.getItem('user-name');
        hideInput();
    } else {
        authButton.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.setItem('user-name', authInput.value);
            hideInput();
            userName.textContent = localStorage.getItem('user-name');
        });
    }

    function hideInput() {
        authInput.classList.add('hide');
        authButton.classList.add('hide');
        authInfo.classList.add('hide');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeUserName);

/***/ }),

/***/ "./js/modules/screensaver.js":
/*!***********************************!*\
  !*** ./js/modules/screensaver.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const screensaver = () => {
    const date = document.querySelector('.modal__date'),
        username = document.querySelector('.modal__username'),
        modal = document.querySelector('.modal'),
        modalData = document.querySelector('.modal__data'),
        btn = document.querySelector('.screensaver__btn');

    btn.addEventListener('click', () => {
        modal.classList.remove('hide');
        date.textContent = (new Date().toDateString());
        username.textContent = localStorage.getItem('user-name');

    });

    modalData.addEventListener('click', () => {
        modal.classList.add('hide');
    });

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (screensaver);

/***/ }),

/***/ "./js/modules/strings.js":
/*!*******************************!*\
  !*** ./js/modules/strings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function strings() {
    const trigger = document.querySelector('.strings__btn'),
        output = document.querySelector('.strings__result .result__value'),
        error = document.querySelector('.strings__error');

    let firstString = document.querySelector('#first'),
        secondString = document.querySelector('#second');

    trigger.addEventListener('click', () => {
        trigger.addEventListener('click', () => {
            if (firstString.value.length === 0 || secondString.value.length === 0) {
                output.innerHTML = '';
                firstString.classList.add('invalid');
                secondString.classList.add('invalid');
                error.innerHTML = `
            <div class="error__message">Убедитесь, что поля "Первая строка" и "Вторая строка" заполнены!</div>
             `;
            }
            else {
                error.innerHTML = '';
                firstString.classList.remove('invalid');
                secondString.classList.remove('invalid');
                if (firstString.value.length === secondString.value.length) {
                    output.innerHTML = 'true';
                }
                else {
                    output.innerHTML = 'false';
                }
            }

        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strings);

/***/ }),

/***/ "./js/modules/test.js":
/*!****************************!*\
  !*** ./js/modules/test.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function test() {

    const DATA = [
        {
            question: 'Как называются программы на языке JavaScript?',
            answers: [
                {
                    id: '0',
                    value: 'Скрипты',
                    isCorrect: true
                },
                {
                    id: '1',
                    value: 'Логи',
                    isCorrect: false
                },
                {
                    id: '2',
                    value: 'Функции',
                    isCorrect: false
                }
            ]
        },
        {
            question: 'Как изначально назывался язык JavaScript?',
            answers: [
                {
                    id: '3',
                    value: 'ECMAScript',
                    isCorrect: false
                },
                {
                    id: '4',
                    value: 'LiveScript',
                    isCorrect: true
                },
                {
                    id: '5',
                    value: 'JavaScript',
                    isCorrect: false
                }
            ]
        },
        {
            question: 'Как называется спецификация языка JS?',
            answers: [
                {
                    id: '6',
                    value: 'ECMAScript',
                    isCorrect: true
                },
                {
                    id: '7',
                    value: 'Java 8',
                    isCorrect: false
                },
                {
                    id: '8',
                    value: 'RulerZ',
                    isCorrect: false
                }
            ]
        },
        {
            question: 'Зависят ли возможности JS от окружения в котором он работает?',
            answers: [
                {
                    id: '9',
                    value: 'Да',
                    isCorrect: true
                },
                {
                    id: '10',
                    value: 'Нет',
                    isCorrect: false
                }
            ]
        },
        {
            question: 'Что из перечисленного относится к возможностям JS?',
            answers: [
                {
                    id: '11',
                    value: 'Читать/записывать файлы на жёстком диске',
                    isCorrect: false
                },
                {
                    id: '12',
                    value: 'Получать данные с других сайтов/доменов ограничена',
                    isCorrect: false
                },
                {
                    id: '13',
                    value: 'Добавлять новый HTML-код на страницу, изменять существующее содержимое, модифицировать стили.',
                    isCorrect: true
                }
            ]
        },
        {
            question: 'С помощью какого метода у Math можно найти максимальное число из массива?',
            answers: [
                {
                    id: '14',
                    value: 'abs',
                    isCorrect: false
                },
                {
                    id: '15',
                    value: 'floor',
                    isCorrect: false
                },
                {
                    id: '16',
                    value: 'max',
                    isCorrect: true
                },
            ]
        },
        {
            question: 'С помощью какого метода у Math можно найти минимальное число из массива?',
            answers: [
                {
                    id: '17',
                    value: 'min',
                    isCorrect: true
                },
                {
                    id: '18',
                    value: 'cos',
                    isCorrect: false
                },
                {
                    id: '19',
                    value: 'ceil',
                    isCorrect: false
                },
            ]
        },
        {
            question: 'Какое свойство строки позволяет узнает её длинну?',
            answers: [
                {
                    id: '20',
                    value: 'length',
                    isCorrect: true
                },
                {
                    id: '21',
                    value: 'lenght',
                    isCorrect: false
                },
            ]
        },
        {
            question: 'С помощью какого объекта можно работать с временем в JS?',
            answers: [
                {
                    id: '22',
                    value: 'Data',
                    isCorrect: false
                },
                {
                    id: '23',
                    value: 'Time',
                    isCorrect: false
                },
                {
                    id: '24',
                    value: 'Date',
                    isCorrect: true
                },
            ]
        },
        {
            question: 'Можно ли с помощью JS хранить данные на стороне клиента? ',
            answers: [
                {
                    id: '25',
                    value: 'Да',
                    isCorrect: true
                },
                {
                    id: '26',
                    value: 'Нет',
                    isCorrect: false
                },
            ]
        }
    ];

    const test = document.querySelector('#test'),
        title = document.querySelector('.test__title'),
        descr = document.querySelector('.test__descr'),
        questions = document.querySelector('#questions'),
        indicator = document.querySelector('#indicator'),
        results = document.querySelector('#results'),
        btnNext = document.querySelector('#btn_next'),
        btnResults = document.querySelector('#btn_reset');


    let localResults = {};
    let validAnswersAmount = DATA.length;

    const renderQuestions = (index) => {
        renderIndicator(index + 1);

        questions.dataset.currentQuestion = index;

        const renderAnswers = () => DATA[index].answers
            .map(item => `
                <li>
                    <label class="answer-label">
                        <input class="answer-input" type="radio" name="${index}" value="${item.id}">
                        ${item.value}
                    </label>
                </li>
            `)
            .join('');
        questions.innerHTML = `
            <div class="test__questions-item">
                <div class="test__questions-item question">
                    ${DATA[index].question}
                </div>
                <ul class="test__questions-item answers flex flex-fdc flex-aic">
                   ${renderAnswers()}
                </ul>
            </div>
        `;
    };


    const renderResults = () => {
        let content = '';


        const getClassName = (item, index) => {
            let className = '';

            if (!item.isCorrect && item.id === localResults[index]) {
                className = 'invalid';
                validAnswersAmount--;
            } else if (item.isCorrect) {
                className = 'valid';
            }

            return className;
        };

        const renderAnswers = (index) => DATA[index].answers
            .map(item => `<li class=${getClassName(item, index)}>${item.value}</li>`)
            .join('');

        DATA.forEach((item, index) => {
            content += `
            <div class="test__results-item">
                <div class="test__result-item question">
                    ${item.question}
                </div>
                <ul class="test__result-item answers flex flex-fdc flex-aic">
                  ${renderAnswers(index)}
                </ul>
            </div>
            `;
        });
        results.innerHTML = content;
    };

    const renderSummary = (validAnswersAmount) => {
        descr.classList.remove('hide');
        descr.innerHTML = `
        <div class="test__descr descr descr_white">
           Количество правильных ответов: ${validAnswersAmount}
        </div>
        `;
    };

    const renderIndicator = (currentStep) => {
        indicator.innerHTML = `${currentStep}/${DATA.length}`;
    };

    const highlightAnswer = () => {
        const answers = document.querySelectorAll('.answer-label');
        answers.forEach(answer => {
            answer.addEventListener('click', (e) => {
                if (e.target.classList.contains('answer-label')) {
                    answers.forEach(answer => {
                        answer.classList.remove('selected');
                    });
                    e.target.classList.add('selected');
                }
            });
        });
    };

    const highlightBtnNext = () => {
        if (btnNext.disabled) {
            btnNext.classList.add('btn_disabled');
        } else {
            btnNext.classList.remove('btn_disabled');
        }
    };

    test.addEventListener('change', (e) => {

        if (e.target.classList.contains('answer-input')) {
            localResults[e.target.name] = e.target.value;
            btnNext.disabled = false;

            highlightAnswer();
            highlightBtnNext();
        }
    });
    test.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn_next')) {
            if (DATA.length === +questions.dataset.currentQuestion + 1) {
                title.textContent = 'Результаты';
                descr.classList.add('hide');
                questions.classList.add('hide');
                indicator.classList.add('hide');
                results.classList.remove('hide');
                btnNext.classList.add('hide');
                btnResults.classList.remove('hide');
                renderResults();
                renderSummary(validAnswersAmount);
            } else {
                renderQuestions(+questions.dataset.currentQuestion + 1);
            }
            btnNext.disabled = true;
            highlightAnswer();
            highlightBtnNext();
        }

        if (e.target.classList.contains('btn_reset')) {
            localResults = {};

            title.textContent = 'Тест';
            descr.classList.remove('hide');
            questions.classList.remove('hide');
            indicator.classList.remove('hide');
            results.classList.add('hide');
            btnNext.classList.remove('hide');
            btnResults.classList.add('hide');
            btnNext.disabled = true;
            renderQuestions(0);
            highlightAnswer();
        }
    });
    renderQuestions(0);
    highlightAnswer();
    highlightBtnNext();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (test);


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


const timer = () => {
	const hours = document.querySelector('#hours'),
		minutes = document.querySelector('#minutes'),
		seconds = document.querySelector('#seconds'),
		startBtn = document.querySelector('#start'),
		stopBtn = document.querySelector('#stop'),
		resetBtn = document.querySelector('#reset');


	let hoursValue = 0,
		minutesValue = 0,
		secondsValue = 0;

	let timerID;

	const getTimerData = () => {
		hoursValue = hours.value * 1000 * 60 * 60;
		minutesValue = minutes.value * 1000 * 60;
		secondsValue = seconds.value * 1000;

		return hoursValue + minutesValue + secondsValue;
	};

	const getTimeRemaining = () => {
		const t = new Date(getTimerData()) - 1000,
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / (1000 * 60)) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	const startTimer = () => {
		startBtn.classList.add('hide');
		stopBtn.classList.remove('hide');

		const updateTimer = () => {
			const t = getTimeRemaining();
			hours.value = (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getZero)(t.hours);
			minutes.value = (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getZero)(t.minutes);
			seconds.value = (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getZero)(t.seconds);

			if (t.total <= 0) {
				clearInterval(timerID);
			}
		};

		timerID = setInterval(updateTimer, 1000);
		updateTimer();
	};

	const stopTimer = () => {
		startBtn.classList.remove('hide');
		stopBtn.classList.add('hide');
		clearInterval(timerID);
	};

	const resetTimer = () => {
		startBtn.classList.remove('hide');
		stopBtn.classList.add('hide');

		clearInterval(timerID);

		hours.value = 0;
		minutes.value = 0;
		seconds.value = 0;
	};

	startBtn.addEventListener('click', () => startTimer());
	stopBtn.addEventListener('click', () => stopTimer());
	resetBtn.addEventListener('click', () => resetTimer());

	// validation

	const timer = document.querySelector('.timer .col');
	let errorBlock = document.createElement('div'),
		errorMessagesBlock = document.createElement('div');

	errorMessagesBlock.className = 'error__messages';
	errorBlock.className = 'error';
	errorBlock.append(errorMessagesBlock);

	const errorMessages = {
		hours: 'В поле "ч" введены данные неверного формата',
		minutes: 'В поле "м" введены данные неверного формата',
		seconds: 'В поле "с" введены данные неверного формата'
	};

	const renderErrorMessage = (input) => {
		let inputID = input.getAttribute('id');

		const setErrorMessageText = (inputID) => {
			for (const key in errorMessages) {
				if (key === inputID) {
					return errorMessages[key];
				}
			}
		};

		errorMessagesBlock.innerHTML += `
			<span id="${inputID}-error" class="error__message">
				${setErrorMessageText(inputID)}
			</span>
		`;
		input.classList.add('input-invalid');
		timer.append(errorBlock);
	};

	const removeErrorMessage = (input) => {
		let inputID = input.getAttribute('id');

		document.querySelector(`#${inputID}-error`).remove();
		input.classList.remove('input-invalid');
	};

	const toggleStartButton = () => {
		if (errorMessagesBlock.childElementCount) {
			startBtn.disabled = true;
		} else {
			startBtn.disabled = false;
		}
	};

	let inputs = [hours, minutes, seconds];
	inputs.forEach(input => {
		input.addEventListener('change', () => {
			if (isNaN(input.value) || input.value < 0) {
				renderErrorMessage(input);
			} else {
				if (errorMessagesBlock.childElementCount) {
					removeErrorMessage(input);
				}
			}
			toggleStartButton();
		});
	});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/modules/triangle.js":
/*!********************************!*\
  !*** ./js/modules/triangle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function triangle() {
    const trigger = document.querySelector('.triangle__btn'),
        output = document.querySelector('.triangle__result .result__value'),
        error = document.querySelector('.triangle__error');

    let height = document.querySelector('#height'),
        base = document.querySelector('#base');

    const errorMsg = {
        emptyData: 'Поля "Высота" и "Основание" должны быть заполнены!',
        stringData: 'В поля "Высота" и "Основание" можно записывать только числа!'
    };

    const errorCheck = (message) => {
        output.innerHTML = '';
        height.classList.add('invalid');
        base.classList.add('invalid');
        error.innerHTML = `
        <div class="error__message">${message}</div>
         `;
    };

    trigger.addEventListener('click', () => {
        if (height.value.length === 0 || base.value.length === 0) {
            errorCheck(errorMsg.emptyData);
        }
        else if (isNaN(height.value) || isNaN(base.value)) {
            errorCheck(errorMsg.stringData);
        } else {
            height.classList.remove('invalid');
            base.classList.remove('invalid');
            error.innerHTML = '';
            output.innerHTML = +height.value * +base.value * 0.5;
        }

    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (triangle);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_changeUserName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/changeUserName */ "./js/modules/changeUserName.js");
/* harmony import */ var _modules_triangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/triangle */ "./js/modules/triangle.js");
/* harmony import */ var _modules_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/strings */ "./js/modules/strings.js");
/* harmony import */ var _modules_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/array */ "./js/modules/array.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/test */ "./js/modules/test.js");
/* harmony import */ var _modules_screensaver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/screensaver */ "./js/modules/screensaver.js");








document.addEventListener('DOMContentLoaded', function () {

    (0,_modules_changeUserName__WEBPACK_IMPORTED_MODULE_0__.default)();

    (0,_modules_triangle__WEBPACK_IMPORTED_MODULE_1__.default)();

    (0,_modules_strings__WEBPACK_IMPORTED_MODULE_2__.default)();

    (0,_modules_array__WEBPACK_IMPORTED_MODULE_3__.default)('.array__data input', '.array__btn', '#min', '#max');

    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__.default)();

    (0,_modules_test__WEBPACK_IMPORTED_MODULE_5__.default)();

    (0,_modules_screensaver__WEBPACK_IMPORTED_MODULE_6__.default)();
});

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getZero": () => (/* binding */ getZero)
/* harmony export */ });
function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map