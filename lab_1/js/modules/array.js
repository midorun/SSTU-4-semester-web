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

export default array;