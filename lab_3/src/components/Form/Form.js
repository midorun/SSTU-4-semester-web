import { MODAL } from '../../constants/root';
import FilmsList from '../FilmsList';

class Form {
    constructor(params) {
        this.formElement = null;
        this.submitBtn = null;
    }

    render() {
        MODAL.innerHTML = `
            <form id="form" class="form hide">
                <input type="text" name="title" id="title" placeholder="Название">
                <input type="text" name="country" id="country" placeholder="Страна">
                <input type="text" name="genre" id="genre" placeholder="Жанр">
                <input type="text" name="director" id="director" placeholder="Режисер">
                <input type="text" name="script" id="script" placeholder="Сценарий">
                <input type="text" name="producer" id="producer" placeholder="Продюсер">
                <input type="text" name="operator" id="operator" placeholder="Оператор">
                <input type="text" name="composer" id="composer" placeholder="Композитор">
                <input type="text" name="budget" id="budget" placeholder="Бюджет">
                <input type="text" name="income" id="income" placeholder="Сборы">
                <input type="text" name="age" id="age" placeholder="Возрастное ограничение">
                <input type="text" name="duration" id="duration" placeholder="Продолжительность">
                <input type="text" name="release" id="release" placeholder="Дата выхода">
                <button id="form-btn-submit" type="submit">Добавить</button>
            </form>
        `
        this.formElement = document.getElementById('form');
        this.submitBtn = document.getElementById('form-btn-submit');
    }

    toggleClasses() {
        this.formElement.classList.toggle('hide');
        this.formElement.classList.toggle('active');
    }

    enable() {
        this.toggleClasses();
    }

    disable() {
        this.toggleClasses();
    }

    addEventListeners() {
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.disable();
            FilmsList.addFilmItem(this.formElement);
        })
    }
}

export default new Form();