import Films from '../Films';
import FilmsControls from '../FilmsContols';
import FilmsList from '../FilmsList';
import Modal from '../Modal';

// styles
import './App.css';
import '../Films/Films.css';
import '../FilmsContols/FilmsControls.css';
import '../FilmsList/FilmsList.css';
import '../FilmsItem/FilmsItem.css'
import '../Modal/Modal.css';



class App {
    render() {
        Films.render();
        Modal.render();
    }

    addEventListeners() {
        FilmsControls.addEventListeners();
        FilmsList.addEventListeners();
        Modal.addEventListeners();
    }
}

export default new App();