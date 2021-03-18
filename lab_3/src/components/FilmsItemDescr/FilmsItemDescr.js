import { DESCR } from '../../constants/root';
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
        let htmlContent = `
        <div class="films-item-descr">
            <div className="films-item-descr-img">Img</div>
            <div className="films-item-descr-text">
                <span class="title">Название: ${this.title}</span>
                <span class="country">Страна: ${this.country}</span>
                <span class="genre">Жанр: ${this.genre}</span>
                <span class="director">Режисер: ${this.director}</span>
                <span class="script">Сценарий: ${this.script}</span>
                <span class="producer">Продюсер: ${this.producer}</span>
                <span class="operator">Оператор: ${this.operator}</span>
                <span class="composer">Композитор: ${this.composer}</span>
                <span class="budget">Бюджет: ${this.budget}</span>
                <span class="income">Сборы: ${this.income}</span>
                <span class="age">Возрастное ограничение: ${this.age}</span>
                <span class="duration">Продолжительность: ${this.duration}</span>
                <span class="release">Дата выхода: ${this.release}</span>
            </div>
        </div>
        `

        DESCR.innerHTML = htmlContent;
    }
}

export default FilmsItemDescr;
