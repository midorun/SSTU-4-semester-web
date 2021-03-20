import { MODAL_ADD_COMMENT } from "../../constants/root";
import getFormDataObj from "../../services/getFormDataObj";

class ModalAddComment {
    constructor(addFilmsItemComment, filmsItemId) {
        this.addFilmsItemComment = addFilmsItemComment;
        this.filmsItemId = filmsItemId;
    }

    render() {
        MODAL_ADD_COMMENT.innerHTML = `
        <div class="modal active modal-add-comment">
            <div class="modal-content">
                <button class="modal-close"><i class="fas fa-times"></i></button>
                <form id="form-add-comment" class="form form-add-comment">
                    <input type="text" name="name" id="name" placeholder="Ваше имя">
                    <input type="text" name="profession" id="profession" placeholder="Ваш род деятельности">
                    <input type="text" name="text" id="text" placeholder="Введите ваш отзыв здесь">
                    <input type="text" name="rate" id="rate" placeholder="Поставьте оценку фильму">
                    <button id="form-add-comment-submit" type="submit">Оставить отзыв</button>
                </form>
            </div>
        </div>
        `
        return this;
    }

    addEventListeners() {
        const modal = document.querySelector('.modal-add-comment');
        const form = document.querySelector('#form-add-comment');
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-add-comment') ||
                e.target.classList.contains('modal-add-comment-close') ||
                e.target.classList.contains('fa-times')) {
                document.querySelector('.modal-add-comment').classList.toggle('active');
            }
        });
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addFilmsItemComment(getFormDataObj(form), this.filmsItemId);
            MODAL_ADD_COMMENT.innerHTML = '';
        })
    }
}

export default ModalAddComment;