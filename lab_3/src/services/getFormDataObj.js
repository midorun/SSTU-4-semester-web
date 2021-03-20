import nextId from './nextId';

const getFormDataObj = (form) => {
    let formDataObj = {};

    const formFields = [...form.elements].map(input => input.id);
    const formData = [...form.elements].map(input => input.value);

    form.reset();

    formFields.forEach((field, i) => {
        formDataObj[field] = formData[i];
    })

    formDataObj['id'] = nextId();

    return formDataObj;
}

export default getFormDataObj;