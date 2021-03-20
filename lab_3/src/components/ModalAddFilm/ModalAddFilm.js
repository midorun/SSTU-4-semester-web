import { MODAL_ADD_FILM } from '../../constants/root';

class ModalAddFilm {
    constructor(FilmsList) {
        this.FilmsList = FilmsList;
        this.modal = null;
    }

    render() {
        MODAL_ADD_FILM.innerHTML = `
        <div class="modal">
            <div class="modal-content">
                <button class="modal-close"><i class="fas fa-times"></i></button>
                <form id="form-add-film" class="form">
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
                    <input type="text" name="img", id="img" placeholder="Ссылка на постер">
                    <button id="form-add-film-submit" type="submit">Добавить</button>
                </form>
            </div>
        </div>
        `

        this.modal = document.querySelector('.modal');
    }

    toggleModal() {
        this.modal.classList.toggle('active');
    }

    addEventListeners() {
        document.querySelector('#form-add-film')
            .addEventListener('submit', (e) => {
                e.preventDefault();
                this.toggleModal();
                this.FilmsList.addFilmsItem(document.querySelector('#form-add-film'));
            })
        this.modal
            .addEventListener('click', (e) => {
                if (e.target === this.modal ||
                    e.target.classList.contains('modal-close') ||
                    e.target.classList.contains('fa-times')) {
                    this.toggleModal();
                }
            })
    }
}

export default ModalAddFilm;