import { FILMS } from '../../constants/root';

class Films {
    constructor(FilmsControls, FilmsList) {
        this.FilmsControls = FilmsControls;
        this.FilmsList = FilmsList;
    }
    render() {
        FILMS.innerHTML = `
            <div class="container">
                ${this.FilmsControls.render()}
                ${this.FilmsList.render()}
            </div>
        `
    }

    addEventListeners() {
        this.FilmsControls.addEventListeners();
        this.FilmsList.addEventListeners();
    }
}

export default Films;