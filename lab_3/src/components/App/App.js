
import FilmsItem from '../FilmsItem';
import FilmsList from '../FilmsList';
import Form from '../Form';

// styles
import './App.css';
import '../FilmsList/FilmsList.css';
import '../FilmsItem/FilmsItem.css'
import '../Form/Form.css';

class App {
    render() {
        FilmsList.render();
        Form.render();
    }
}

export default new App();