"use strict";


// Data
const dataInput = document.querySelector('#data-input'),
    dataBtn = document.querySelector('#data-btn');

let DATA;

dataBtn.addEventListener('click', () => setData(dataInput));

const setData = (dataInput) => {
    DATA = dataInput.value.trim()
        .split(' ')
        .filter(string => string ? string : false)
}

// task1
const button1 = document.querySelector('#button1'),
    answer1 = document.querySelector('#answer1');

button1.addEventListener('click', () => setAnswer1(DATA));

const setAnswer1 = (DATA) => {

    const getLongestStr = (DATA) => {

        return DATA.sort((a, b) => {
            if (a.length > b.length) return -1;
            if (a.length < b.length) return 1;
            else return 0;
        })
            .filter((item, i) => i == 0)
            .join('')
    }
    answer1.textContent = getLongestStr(DATA);
}

// task2
const answer2 = document.querySelector('#answer2'),
    button2 = document.querySelector('#button2'),
    input2 = document.querySelector('#input2');

button2.addEventListener('click', () => setAnswer2(input2.value))

const setAnswer2 = (string) => {
    const getMostCommonChar = (string) => {
        let commonChar = '';
        let commonCharQuantity = 0;

        let chars = {};
        for (let char of string.split('')) {
            if (chars.hasOwnProperty(char)) {
                chars[char]++
            } else {
                chars[char] = 1;
            }
        }

        for (const char in chars) {
            if (chars[char] > commonCharQuantity) {
                commonChar = char;
                commonCharQuantity = chars[char];
            }
        }
        return commonChar;
    }

    answer2.textContent = getMostCommonChar(string);
}
// task 3
const answer3 = document.querySelector('#answer3'),
    button3 = document.querySelector('#button3');

button3.addEventListener('click', () => setAnswer3(input2.value))
const setAnswer3 = (string) => {
    const changeMostCommonChar = (string) => {
        return string.replaceAll(answer2.textContent, prompt('Введите символ', ''));
    }

    answer3.textContent = changeMostCommonChar(string);
}
// task 4
const input4 = document.querySelector('#input4'),
    answer4 = document.querySelector('#answer4'),
    button4 = document.querySelector('#button4');

button4.addEventListener('click', () => setAnswer4(input4.value));

const setAnswer4 = (strings) => {
    let [original, lanigiro] = strings.trim().split(' ').filter((word, i) => (word && i < 2) ? word : false);

    console.log(original, lanigiro);
    const isAnagram = (original, lanigiro) => {

        const sortChars = (string) => {
            return string.toLowerCase().split('').sort().join('');
        }
        return sortChars(original) === sortChars(lanigiro);
    }
    answer4.textContent = isAnagram(original, lanigiro);
}
