import FilmsList from '../FilmsList';
import Modal from '../Modal';

// styles
import './App.css';
import '../FilmsList/FilmsList.css';
import '../FilmsItem/FilmsItem.css'
import '../Modal/Modal.css';

class App {
    render() {
        FilmsList.render();
        Modal.render();
    }
}

export default new App();