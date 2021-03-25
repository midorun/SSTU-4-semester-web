
export default class ModalAddFilm {
    constructor(addFilmsItem) {
        this.addFilmsItem = addFilmsItem;
    }

    render(MODAL_ROOT) {
        MODAL_ROOT.innerHTML = `
        <div id="modal-add-film" class="modal active">
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
        `;

        return this;
    }

    addEventListeners() {

        const modal = document.querySelector('#modal-add-film');
        const modalForm = document.querySelector('#form-add-film');

        modal.addEventListener('click', (e) => {
            if (e.target === modal ||
                e.target.classList.contains('modal-close') ||
                e.target.classList.contains('fa-times')) {
                document.getElementById('modal').innerHTML = '';
            }
        })

        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addFilmsItem(modalForm);
            document.getElementById('modal').innerHTML = '';
        })


    }
}
