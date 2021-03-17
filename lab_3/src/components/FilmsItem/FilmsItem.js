import nextId from "../../services/nextId";

class FilmsItem {
    constructor(
        title = '',
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
        return (
            `
            <li data-card-id='${this.id}' class="films-item">
                <div>
                    <span class="title">
                        ${this.title}
                    </span>
                    <span class="age">
                        ${this.age}
                    </span>
                </div>
                <hr>
                <div class="films-item-img">
                    <img src="${this.img}" alt="" >
                </div>        
                <div class="films-item-controls">
                    <button class="films-item-delete" data-films-item-id="${this.id}" >
                        &times;
                    </button>

                    <button class="films-item-turn">
                        <i class="fas fa-undo"></i>
                    </button>
                </div>
            </li>
            `
        )
    }

}
export default FilmsItem;

/* <li data-card-id='${this.id}' class="films-item">
<span class="title">
    Название: ${this.title}
</span>
<span class="country">
    Страна: ${this.country}
</span>
<span class="genre">
    Жанр: ${this.genre}
</span>
<span class="director">
    Режисер: ${this.director}
</span>
<span class="script">
    Сценарий: ${this.script}
</span>
<span class="producer">
    Продюсер: ${this.producer}
</span>
<span class="operator">
    Оператор: ${this.operator}
</span>
<span class="composer">
    Композитор: ${this.composer}
</span>
<span class="budget">
    Бюджет: ${this.budget}
</span>
<span class="income">
    Сборы: ${this.income}
</span>
<span class="age">
    Возрастное ограничение: ${this.age}
</span>
<span class="duration">
    Продолжительность: ${this.duration}
</span>
<span class="release">
    Дата выхода: ${this.release}
</span>
<button class="films-item-delete" data-film-item-id="${this.id}" >Удалить</button>
</li> */