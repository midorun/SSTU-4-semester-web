import FilmsFilter from './FilmsFilter';

class FilmsControls {
    constructor(ModalAddFilm, data) {
        this.ModalAddFilm = ModalAddFilm;
        this.data = data;
    }

    render() {
        return (
            `
            <ul class="films-controls">
                <li class="films-controls-item">
                    ${new FilmsFilter().render('country', 'country', this.data)}   
                </li>
              
                <li class="films-controls-item">
                    <button id="films-controls-add" class="films-controls-add">
                        <i class="fas fa-plus"></i>
                    </button>
                </li>
            </ul>
            `
        )
    }
    //     <li class="films-controls-item">
    //     ${new FilmsFilter().render()}   
    // </li>
    // <li class="films-controls-item">
    //     ${new FilmsFilter().render()}   
    // </li>
    addEventListeners() {
        document.querySelector('#films-controls-add')
            .addEventListener('click', () => this.ModalAddFilm.toggleModal());

    }
}

export default FilmsControls;