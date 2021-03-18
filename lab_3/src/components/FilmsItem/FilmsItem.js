import nextId from "../../services/nextId";

class FilmsItem {
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
                    <button 
                        class="films-item-controls-delete" 
                        data-films-item-id="${this.id}" 
                    >
                        <i class="fas fa-times"></i>
                    </button>

                    <button 
                        class="films-item-controls-descr" 
                        data-films-item-id="${this.id}"
                    >
                        <i class="fas fa-info"></i>
                    </button>
                </div>
            </li>
            `
        )
    }

}
export default FilmsItem;