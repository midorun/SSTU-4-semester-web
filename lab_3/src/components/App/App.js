import Films from '../Films';
import FilmsControls from '../FilmsContols';
import FilmsList from '../FilmsList';
import ModalAddFilm from '../ModalAddFilm';
import ModalAddComment from '../ModalAddComment';
import DATA from '../../constants/DATA';


// styles
import './App.css';
import '../Films/Films.css';
import '../FilmsContols/FilmsControls.css';
import '../FilmsList/FilmsList.css';
import '../FilmsItem/FilmsItem.css'
import '../ModalAddFilm/ModalAddFilm.css';
import '../ModalShowFilmDescr/ModalShowFilmDescr.css'
import '../ModalAddComment/ModalAddComment.css';


class App {
    constructor(Films, ModalAddFilm, DATA) {
        this.Films = Films;
        this.ModalAddFilm = ModalAddFilm;
        this.data = DATA;
    }

    render() {

        const data = localStorage.getItem('data');
        if (data) {
            this.data = JSON.parse(data);
        } else {
            localStorage.setItem('data', JSON.stringify(this.data));
        }

        this.Films.FilmsList.data = this.data;
        this.Films.FilmsList.Films = this.Films;
        this.Films.FilmsControls.ModalAddFilm = this.ModalAddFilm;
        this.ModalAddFilm.FilmsList = this.Films.FilmsList;

        this.Films.render();
        this.ModalAddFilm.render();
    }

    updateState(data) {
        localStorage.setItem('data', JSON.stringify(data));
    }

    addEventListeners() {
        this.Films.addEventListeners()
        this.ModalAddFilm.addEventListeners();
    }
}

export default new App(new Films(new FilmsControls(), new FilmsList()), new ModalAddFilm(), DATA);