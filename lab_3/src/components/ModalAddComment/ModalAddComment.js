import { MODAL_ADD_COMMENT } from "../../constants/root";
import FilmsList from "../FilmsList/FilmsList";

class ModalAddComment {
    constructor(FilmsList) {
        this.FilmsList = FilmsList;
    }

    render() {
        MODAL_ADD_COMMENT.innerHTML = `
        <div class="modal modal-add-comment">
            <div class="modal-content">
                <button class="modal-close"><i class="fas fa-times"></i></button>
                <form id="form-add-comment" class="form form-add-comment">
                    <input type="text" name="name" id="name" placeholder="Ваше имя">
                    <input type="text" name="profession" id="profession" placeholder="Ваш род деятельности">
                    <input type="text" name="text" id="text" placeholder="Введите ваш комментарий здесь">
                    <input type="text" name="rate" id="rate" placeholder="Поставьте оценку фильму">
                    <button id="form-add-comment-submit" type="submit">Оставить комментарий</button>
                </form>
            </div>
        </div>
        `

        document.querySelector('.modal-add-comment')
            .addEventListener('click', (e) => {
                if (e.target.classList.contains('modal-add-comment') ||
                    e.target.classList.contains('modal-add-comment-close') ||
                    e.target.classList.contains('fa-times')) {
                    document.querySelector('.modal-add-comment').classList.toggle('active');
                }
                else if (e.target.getAttribute('id') === 'form-add-comment-submit') {
                    e.preventDefault();
                    ModalAddComment.toggle();
                    this.FilmsList.addFilmsComment();
                }
            });
    }

    static toggle() {
        document.querySelector('.modal-add-comment').classList.toggle('active');
    }
}

export default ModalAddComment;