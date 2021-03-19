import getFormDataObj from '../../services/getFormDataObj';
import FilmsItem from '../FilmsItem';
import FilmsItemDescr from '../FilmsItemDescr/FilmsItemDescr';


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

        localStorage.setItem('data', JSON.stringify(this.data));

        this.Films.render();
        this.Films.addEventListeners();
    }

    addFilmsItem(form) {
        this.data.push(getFormDataObj(form));

        localStorage.setItem('data', JSON.stringify(this.data));

        this.Films.render();
        this.Films.addEventListeners();
    }

    addEventListeners() {
        document.querySelectorAll('.films-item')
            .forEach(filmsItem => {
                const id = +filmsItem.getAttribute('data-id');
                filmsItem.querySelector('.films-item-controls-delete')
                    .addEventListener('click', () => {
                        this.removeFilmsItem(id);
                    })
                filmsItem.querySelector('.films-item-controls-descr')
                    .addEventListener('click', () => {
                        const [filmsItemData] = this.data.filter(film => film.id === id);
                        return new FilmsItemDescr(filmsItemData).render();
                    })
            });
    }
}

export default FilmsList;