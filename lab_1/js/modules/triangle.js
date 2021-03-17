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

export default triangle;