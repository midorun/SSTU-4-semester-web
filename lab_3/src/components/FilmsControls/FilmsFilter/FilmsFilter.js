export default class FilmsFilter {
    render(selectName, selectId, selectData) {

        let optionsArray = [];
        selectData.forEach(item => {
            for (const word of item[selectName]) {
                optionsArray.push(word);
            }
        });
        optionsArray = new Set(optionsArray);

        let optionsHtml = '';

        optionsArray.forEach(option => {
            optionsHtml += `
                <option value="${option}">${option}</option>
            `
        });
        return (
            `
            <select name="${selectName}" id="${selectId}">
                <option value="all">Все</option>
                ${optionsHtml}
            </select>
            `
        )
    }
}