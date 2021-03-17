import DATA from '../../constants/DATA';
import nextId from '../../services/nextId';
import Films from '../Films';
import FilmsItem from '../FilmsItem';


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
        this.DATA = this.DATA.filter(item => item.id !== id);

        Films.render();
        Films.addEventListeners();

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

        this.DATA.push(formDataObj);

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

export default new FilmsList(DATA);