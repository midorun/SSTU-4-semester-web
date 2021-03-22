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

    addEventListeners() {
        document.querySelector('#films-controls-add')
            .addEventListener('click', () => this.ModalAddFilm.toggleModal());
        document.querySelector('#country')
            .addEventListener('change', (e) => {
                console.log('select');
                console.log(e.target.value);
            })

    }
}

export default FilmsControls;