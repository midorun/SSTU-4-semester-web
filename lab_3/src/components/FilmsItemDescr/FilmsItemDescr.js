import { MODAL_SHOW_FILM_DESCR } from '../../constants/root';
import nextId from '../../services/nextId';

class FilmsItemDescr {
    constructor(
        { title = '',
            country = '',
            genre = '',
            director = '',
            script = '',
            producer = '',
            operator = '',
            composer = '',
            budget = '',
            income = '',
            age = '',
            duration = '',
            release = '',
            img = '',
            id = nextId()
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
        this.id = id;
    }
    render() {
        MODAL_SHOW_FILM_DESCR.innerHTML = `
        <div class="modal films-item-descr">
            <div class="films-item-descr-content">
                <div class="films-item-descr-img">
                    <img src="${this.img}"
                        alt="poster" />
                </div>
                <div class="films-item-descr-text">
                    <span class="title">${this.title}</span>
                    <span class="country">Страна: ${this.genre}</span>
                    <span class="genre">Жанр: ${this.genre}</span>
                    <span class="director">Режисер: ${this.director}</span>
                    <span class="producer">Продюсер: ${this.producer}</span>
                    <span class="operator">Оператор: ${this.operator}</span>
                    <span class="composer">Композитор: ${this.composer}</span>
                    <span class="budget">Бюджет: ${this.budget}</span>
                    <span class="income">Сборы: ${this.income}</span>
                    <span class="age">Возрастное ограничение: ${this.age}</span>
                    <span class="duration">Продолжительность: ${this.release}</span>
                    <span class="release">Дата выхода: ${this.release}</span>
                    <span class="script">Сценарий: ${this.script} </span>
                </div>
                <button class="films-item-descr-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        `

        document.querySelector('.films-item-descr')
            .addEventListener('click', (e) => {
                if (e.target.classList.contains('films-item-descr') ||
                    e.target.classList.contains('films-item-descr-close') ||
                    e.target.classList.contains('fa-times')) {
                    MODAL_SHOW_FILM_DESCR.innerHTML = ''
                }
            });
    }
}

export default FilmsItemDescr;
