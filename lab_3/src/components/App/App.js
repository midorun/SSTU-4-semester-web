import Films from '../Films';
import FilmsControls from '../FilmsContols';
import FilmsList from '../FilmsList';
import Modal from '../Modal';
import DATA from '../../constants/DATA';

// styles
import './App.css';
import '../Films/Films.css';
import '../FilmsContols/FilmsControls.css';
import '../FilmsList/FilmsList.css';
import '../FilmsItem/FilmsItem.css'
import '../Modal/Modal.css';

class App {
    constructor(Films, Modal, DATA) {
        this.Films = Films;
        this.Modal = Modal;
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
        this.Films.FilmsControls.Modal = this.Modal;
        this.Films.render(this.data);
        this.Modal.render();
    }

    updateState(data) {

        localStorage.setItem('data', JSON.stringify(data));
        App.data = JSON.parse(localStorage.getItem('data'));
    }

    addEventListeners() {
        this.Films.addEventListeners()
        this.Modal.addEventListeners();
    }
}

export default new App(new Films(new FilmsControls(), new FilmsList()), new Modal(), DATA);