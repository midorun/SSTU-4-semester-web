import FilmsControls from '../FilmsControls';
import FilmsList from '../FilmsList';
import FilmsItem from '../FilmsItem';
import DATA from '../../constants/DATA';
import getFormDataObj from '../../services/getFormDataObj';
import { ROOT } from '../../constants/root';

// styles
import './App.css';
import '../FilmsControls/FilmsControls.css';
import '../FilmsControls/ModalAddFilm/ModalAddFilm.css'
import '../FilmsList/FilmsList.css';
import '../FilmsItem/FilmsItem.css'
import '../ModalShowFilmDescr/ModalShowFilmDescr.css'
import '../ModalAddComment/ModalAddComment.css';





class App {
    constructor(DATA) {
        this.data = DATA;
        this.filterSettings = {
            country: 'all',
            genre: 'all',
            duration: 'none'
        }
        this.removeFilmsItem = this.removeFilmsItem.bind(this);
        this.addFilmsItem = this.addFilmsItem.bind(this);
        this.addFilmsItemComment = this.addFilmsItemComment.bind(this);
        this.filterFilms = this.filterFilms.bind(this);
        this.render = this.render.bind(this);
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
                item.comments.push(commentContentObj);
            }
        });

        localStorage.setItem('data', JSON.stringify(this.data));
        this.render();
    }

    filterFilms() {

        this.data = this.data.filter(film => {
            if (this.filterSettings['country'] === 'all') {
                return film;
            } else {
                return film['country'].find(item => item === this.filterSettings['country'])
            }
        });

        console.log(this.data);

        this.data = this.data.filter(film => {
            if (this.filterSettings['genre'] === 'all') {
                return film;
            } else {
                return film['genre'].find(item => item === this.filterSettings['genre'])
            }
        });

        console.log(this.data);

    }

    setInitialData() {
        const data = localStorage.getItem('data');
        if (data) {
            this.data = JSON.parse(data);
        } else {
            localStorage.setItem('data', JSON.stringify(this.data));
        }
    }

    setInitialFilterSettings() {
        const filterSettings = localStorage.getItem('filterSettings');
        if (filterSettings) {
            this.filterSettings = JSON.parse(filterSettings);
        } else {
            localStorage.setItem('filterSettings', JSON.stringify(this.filterSettings));
        }
    }

    render() {
        this.setInitialData()
        this.setInitialFilterSettings()

        this.filterFilms()

        const LSData = JSON.parse(localStorage.getItem('data'));

        ROOT.innerHTML = `
            <div class="films">
                <div class="container">
                    ${new FilmsControls(LSData, this.filterSettings).render()}
                    ${new FilmsList(this.data).render()}
                    <div id="modal"></div>
                </div>
            </div>        
        `;

        const MODAL_ROOT = document.getElementById('modal');
        FilmsControls.addEventListeners(MODAL_ROOT, this.addFilmsItem, this.filterFilms, this.render);
        FilmsItem.addEventListeners(MODAL_ROOT, this.data, this.removeFilmsItem, this.addFilmsItemComment)
    }
}

export default new App(DATA);