import nextId from './nextId';

const getFormDataObj = (form, filmId = nextId()) => {
    let formDataObj = {};

    const formFields = [...form.elements].map(input => input.id);
    const formData = [...form.elements].map(input => input.value);

    form.reset();

    formFields.forEach((field, i) => {
        formDataObj[field] = formData[i];
    })
    formDataObj['id'] = filmId;

    return formDataObj;
}

export default getFormDataObj;