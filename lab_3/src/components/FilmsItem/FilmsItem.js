import ModalAddFilm from '../FilmsControls/ModalAddFilm';
import ModalAddComment from '../ModalAddComment';
import ModalShowFilmDescr from '../ModalShowFilmDescr';
import nextId from "../../services/nextId";

class FilmsItem {
    constructor(
        {
            age = '',
            budget = '',
            composer = '',
            country = [],
            comments = [],
            director = '',
            duration = '',
            genre = [],
            img = '',
            id = nextId(),
            income = '',
            operator = '',
            producer = '',
            release = '',
            script = '',
            title = '',
        }
    ) {
        this.title = title
        this.country = country
        this.genre = genre
        this.director = director
        this.script = script
        this.producer = producer
        this.operator = operator
        this.composer = composer
        this.budget = budget
        this.income = income
        this.age = age
        this.duration = duration
        this.release = release
        this.img = img
        this.comments = comments
        this.id = id

    }

    render() {
        return (
            `
            <li data-id='${this.id}' class="films-item">
                <div class="films-item-content">
                    <span class="title">${this.title}</span>

                    <div class="films-item-img">
                        <span class="age">${this.age}</span>
                        <img src="${this.img}" alt="" >
                    </div>   
                </div>
                     
                <div class="films-item-controls">
                    <button class="films-item-controls-delete">
                        <i class="fas fa-times"></i>
                    </button>

                    <button class="films-item-controls-comment">
                        <i class="fas fa-comment-alt"></i>
                    </button>
                    
                    <button class="films-item-controls-descr">
                        <i class="fas fa-info"></i>
                    </button>
                </div>
            </li>
            `
        )
    }

    static addEventListeners(MODAL_ROOT, data, removeFilmsItem, addFilmsItemComment) {
        document.querySelectorAll('.films-item')
            .forEach(filmsItem => {
                const id = filmsItem.getAttribute('data-id');
                filmsItem.querySelector('.films-item-controls-delete')
                    .addEventListener('click', () => {
                        removeFilmsItem(id);
                    })
                filmsItem.querySelector('.films-item-controls-comment')
                    .addEventListener('click', () => {
                        return new ModalAddComment(addFilmsItemComment, id)
                            .render(MODAL_ROOT)
                            .addEventListeners();
                    })
                filmsItem.querySelector('.films-item-controls-descr')
                    .addEventListener('click', () => {
                        const [filmsItemData] = data.filter(film => film.id === id);
                        return new ModalShowFilmDescr(filmsItemData)
                            .render(MODAL_ROOT)
                            .addEventListeners();
                    })

            });
    }
}
export default FilmsItem;