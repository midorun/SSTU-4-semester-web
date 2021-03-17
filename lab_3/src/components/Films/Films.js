import { FILMS } from '../../constants/root';
import FilmsControls from '../FilmsContols/FilmsControls';
import FilmsList from '../FilmsList';

class Films {
    render() {
        FILMS.innerHTML = `
            <div class="container">
                ${FilmsControls.render()}
                ${FilmsList.render()}
            </div>
        `
    }

    addEventListeners() {
        FilmsControls.addEventListeners();
        FilmsList.addEventListeners();
    }
}

export default new Films();