import DATA from '../../constants/DATA';
import nextId from '../../services/nextId';
import Films from '../Films';
import FilmsItem from '../FilmsItem';
import App, { App as staticApp } from '../App';


class FilmsList {
    constructor(Films, data) {
        this.Films = Films;
        this.data = data;
    }

    render() {

        const FilmsItems = this.data.map(({
            title,
            country,
            genre,
            director,
            script,
            producer,
            operator,
            composer,
            budget,
            income,
            age,
            duration,
            release,
            img,
            id }) => {
            return new FilmsItem(
                title,
                country,
                genre,
                director,
                script,
                producer,
                operator,
                composer,
                budget,
                income,
                age,
                duration,
                release,
                img,
                id
            ).render();
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

        Films.render();
        Films.addEventListeners();
    }

    addEventListeners() {
        document.querySelectorAll('.films-item-delete')
            .forEach(element => {
                element.addEventListener('click', () => {
                    let id = +element.getAttribute('data-films-item-id');
                    this.removeFilmsItem(id);
                })
            })
    }
}

export default FilmsList;