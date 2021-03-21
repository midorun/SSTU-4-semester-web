import Films from '../Films';
import FilmsControls from '../FilmsControls';
import FilmsList from '../FilmsList';
import ModalAddFilm from '../FilmsControls/ModalAddFilm';
import DATA from '../../constants/DATA';


// styles
import './App.css';
import '../Films/Films.css';
import '../FilmsControls/FilmsControls.css';
import '../FilmsControls/ModalAddFilm/ModalAddFilm.css'
import '../FilmsList/FilmsList.css';
import '../FilmsItem/FilmsItem.css'
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
        this.Films.FilmsControls.data = this.data;


        this.ModalAddFilm.FilmsList = this.Films.FilmsList;

        this.Films.render();
        this.ModalAddFilm.render();
    }

    addEventListeners() {
        this.Films.addEventListeners()
        this.ModalAddFilm.addEventListeners();
    }
}

export default new App(new Films(new FilmsControls(), new FilmsList()), new ModalAddFilm(), DATA);