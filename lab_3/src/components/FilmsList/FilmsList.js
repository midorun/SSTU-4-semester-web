import nextId from '../../services/nextId';
import FilmsItem from '../FilmsItem';


class FilmsList {
    constructor(Films, data) {
        this.Films = Films;
        this.data = data;
    }

    render() {
        const FilmsItems = this.data.map((props) => {
            return new FilmsItem(props).render();
        })

        return (
            `
            <ul class="films-list">
                ${FilmsItems.join('')}
            </ul>
            `
        )
    }

    removeFilmsItem(id) {
        this.data = this.data.filter(item => item.id !== id);

        App.updateState(this.data);

        this.Films.render();
        this.Films.addEventListeners();
    }

    addFilmsItem(form) {
        let formDataObj = {};

        const formFields = [...form.elements].map(input => input.id);
        const formData = [...form.elements].map(input => input.value);

        form.reset();

        formFields.forEach((field, i) => {
            formDataObj[field] = formData[i];
        })
        formDataObj['id'] = nextId();

        this.data.push(formDataObj);

        App.updateState(this.data);

        this.Films.render();
        this.Films.addEventListeners();
    }

    addEventListeners() {
        document.querySelectorAll('.films-item-delete')
            .forEach(element => {
                element.addEventListener('click', () => {
                    let id = +element.getAttribute('data-films-item-id');
                    console.log(id);
                    this.removeFilmsItem(id);
                })
            })
    }
}

export default FilmsList;