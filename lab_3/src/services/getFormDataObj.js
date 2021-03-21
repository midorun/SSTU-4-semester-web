import nextId from './nextId';

const getFormDataObj = (form) => {
    let formDataObj = {};

    const formFields = [...form.elements].map(input => input.id);
    const formData = [...form.elements].map(input => input.value);

    form.reset();

    formFields.forEach((field, i) => {
        if (field === 'country') {
            formDataObj[field] = formData[i].replace(',', '').split(' ');
        }
        else if (field === 'genre') {
            formDataObj[field] = formData[i].replace(',', '').split(' ');
        }
        else {
            formDataObj[field] = formData[i];
        }
    })

    formDataObj['id'] = nextId();

    return formDataObj;
}

export default getFormDataObj;