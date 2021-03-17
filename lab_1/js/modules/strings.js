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

export default strings;