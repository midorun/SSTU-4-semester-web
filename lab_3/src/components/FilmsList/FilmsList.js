import getFormDataObj from '../../services/getFormDataObj';
import FilmsItem from '../FilmsItem';
import ModalShowFilmDescr from '../ModalShowFilmDescr/ModalShowFilmDescr';
import ModalAddComment from '../ModalAddComment';


class FilmsList {
    constructor(Films, data) {
        this.Films = Films;
        this.data = data;
        this.addFilmsItemComment = this.addFilmsItemComment.bind(this);
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

    addFilmsItemComment(commentContent, filmId) {
        commentContent['id'] = filmId;

        this.data.map(item => {
            if (item.id === filmId) {
                item.comments.push(commentContent);
            }
        });

        localStorage.setItem('data', JSON.stringify(this.data));
    }

    addEventListeners() {
        document.querySelectorAll('.films-item')
            .forEach(filmsItem => {
                const id = filmsItem.getAttribute('data-id');
                filmsItem.querySelector('.films-item-controls-delete')
                    .addEventListener('click', () => {
                        this.removeFilmsItem(id);
                    })
                filmsItem.querySelector('.films-item-controls-descr')
                    .addEventListener('click', () => {
                        const [filmsItemData] = this.data.filter(film => film.id === id);
                        return new ModalShowFilmDescr(filmsItemData)
                            .render();
                    })
                filmsItem.querySelector('.films-item-controls-comment')
                    .addEventListener('click', () => {
                        return new ModalAddComment(this.addFilmsItemComment, id)
                            .render()
                            .addEventListeners();
                    })
            });
    }
}

export default FilmsList;