export default class FilmsFilter {
    render(selectValue, selectData, filterKey) {

        let optionsArray = [];

        selectData.forEach(item => {
            for (const word of item[selectValue]) {
                optionsArray.push(word);
            }
        });

        optionsArray = new Set(optionsArray);

        let optionsHtml = '';

        optionsArray.forEach(option => {
            if (option === filterKey) {
                optionsHtml += `
                    <option selected value="${option}">${option}</option>
                `
            } else {
                optionsHtml += `
                    <option value="${option}">${option}</option>
                `
            }

        });
        return (
            `
            <select name="${selectValue}" id="${selectValue}">
                <option value="all">Все</option>
                ${optionsHtml}
            </select>
            `
        )
    }
}