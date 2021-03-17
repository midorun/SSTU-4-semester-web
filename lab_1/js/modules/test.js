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
export default test;
