
class FilmsControls {
    constructor(ModalAddFilm) {
        this.ModalAddFilm = ModalAddFilm;
    }

    render() {

        return (
            `
            <ul class="films-controls">
                <li class="films-controls-item">
                    <button id="films-controls-add" class="films-controls-add">
                        <i class="fas fa-plus"></i>
                    </button>
                </li>
            </ul>
            `
        )
    }

    addEventListeners() {
        document.querySelector('#films-controls-add')
            .addEventListener('click', () => this.ModalAddFilm.toggleModal());
    }
}

export default FilmsControls;