import { MODAL } from '../../constants/root';

class Modal {
    constructor(FilmsList) {
        this.FilmsList = FilmsList;
        this.modal = null;
        this.form = null;
    }

    render() {
        MODAL.innerHTML = `
        <div class="modal">
            <div class="modal-content">
                <span class="modal-close"><i class="fas fa-times"></i></span>
                <form id="form" class="form">
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
                    <button id="form-btn-submit" type="submit">Добавить</button>
                </form>
            </div>
        </div>
        `
        this.modal = document.querySelector('.modal');
        this.form = document.querySelector('#form');
    }

    toggleModal() {
        this.modal.classList.toggle('active');
    }

    addEventListeners() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.toggleModal();
            this.FilmsList.addFilmsItem(this.form);
        })
        this.modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal')) {
                this.toggleModal();
            }
        })
    }
}

export default Modal;