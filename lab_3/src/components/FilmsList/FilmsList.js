import DATA from '../../constants/DATA';
import { FILMS } from '../../constants/root';
import nextId from '../../services/nextId';
import FilmsItem from '../FilmsItem';
import Form from '../Form';

class FilmsList {
    constructor(DATA) {
        this.DATA = DATA;
    }

    render() {

        const FilmsItems = this.DATA.map(({
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
                id
            ).render();
        })

        FILMS.innerHTML =
            `
            <div class="container">
                <nav class="films-controls">
                    <ul>
                        <li>
                            <button id="films-controls-add" class="films-controls-add"></ button>
                        </li>
                    </ul>
                </nav>
                <ul class="films-list">
                    ${FilmsItems.join('')}
                </ul>
            </div>
        `;


    }

    removeFilmItem(id) {
        this.DATA = this.DATA.filter(item => item.id !== id);
        this.render();
        this.addEventListeners();
    }

    addFilmItem(form) {
        let formDataObj = {};

        const formFields = [...form.elements].map(input => input.id);
        const formData = [...form.elements].map(input => input.value);

        form.reset();

        formFields.forEach((field, i) => {
            formDataObj[field] = formData[i];
        })
        formDataObj['id'] = nextId();

        this.DATA.push(formDataObj);
        this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        document.querySelectorAll('.film-item-delete')
            .forEach(element => {
                element.addEventListener('click', () => {
                    let id = +element.getAttribute('data-film-item-id');
                    this.removeFilmItem(id);
                })
            })
        document.querySelector('.films-controls-add')
            .addEventListener('click', () => Form.enable());
    }
}

export default new FilmsList(DATA);