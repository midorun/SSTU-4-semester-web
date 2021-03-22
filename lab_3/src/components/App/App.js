import FilmsControls from '../FilmsControls';
import FilmsList from '../FilmsList';
import ModalAddFilm from '../FilmsControls/ModalAddFilm';
import ModalAddComment from '../ModalAddComment';
import ModalShowFilmDescr from '../ModalShowFilmDescr';
import DATA from '../../constants/DATA';

import getFormDataObj from '../../services/getFormDataObj';


// styles
import './App.css';
import '../FilmsControls/FilmsControls.css';
import '../FilmsControls/ModalAddFilm/ModalAddFilm.css'
import '../FilmsList/FilmsList.css';
import '../FilmsItem/FilmsItem.css'
import '../ModalShowFilmDescr/ModalShowFilmDescr.css'
import '../ModalAddComment/ModalAddComment.css';

import { ROOT, MODAL } from '../../constants/root';


class App {
    constructor(DATA) {
        this.data = DATA;
        this.addFilmsItem = this.addFilmsItem.bind(this);
        this.addFilmsItemComment = this.addFilmsItemComment.bind(this);
    }

    removeFilmsItem(id) {
        this.data = this.data.filter(item => item.id !== id);

        localStorage.setItem('data', JSON.stringify(this.data));

        this.render();
    }

    addFilmsItem(form) {
        this.data.push(getFormDataObj(form));
        localStorage.setItem('data', JSON.stringify(this.data));
        this.render();
    }

    addFilmsItemComment(form, filmId) {
        let commentContentObj = getFormDataObj(form);
        commentContentObj['id'] = filmId;

        this.data.map(item => {
            if (item.id === filmId) {
                console.log(item);
                item.comments.push(commentContentObj);
            }
        });

        localStorage.setItem('data', JSON.stringify(this.data));
        this.render();
    }

    filterFilms(filterArg) {
        this.data = this.data.filter(film => film.country.find(filterArg))
    }

    render() {

        const data = localStorage.getItem('data');
        if (data) {
            this.data = JSON.parse(data);
        } else {
            localStorage.setItem('data', JSON.stringify(this.data));
        }

        ROOT.innerHTML = `
            <div class="films">
                <div class="container">
                    ${new FilmsControls(this.data).render()}
                    ${new FilmsList(this.data).render()}
                    <div id="modal"></div>
                </div>
            </div>        
        `;

        const MODAL_ROOT = document.getElementById('modal');

        document.querySelector('.films-controls-add')
            .addEventListener('click', () => {
                return new ModalAddFilm(this.addFilmsItem)
                    .render(MODAL_ROOT)
                    .addEventListeners();
            });

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
                        console.log(filmsItemData);
                        return new ModalShowFilmDescr(filmsItemData)
                            .render(MODAL_ROOT)
                            .addEventListeners();
                    })
                filmsItem.querySelector('.films-item-controls-comment')
                    .addEventListener('click', () => {
                        return new ModalAddComment(this.addFilmsItemComment, id)
                            .render(MODAL_ROOT)
                            .addEventListeners();
                    })
            });

        // console.log(this);
    }
}

export default new App(DATA);