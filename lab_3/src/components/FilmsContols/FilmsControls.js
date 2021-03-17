import Modal from '../Modal';

class FilmsControls {
    constructor(Modal) {
        this.Modal = Modal;
    }
    render() {
        return (
            `
 
           <ul class="films-controls">
                <li>

                    <button id="films-controls-add" class="films-controls-add">
                    <i class="fas fa-plus"></i>
                    </button>
                </li>
            </ul>
           `
        )
    }

    addEventListeners() {
        document.querySelector('.films-controls-add')
            .addEventListener('click', () => this.Modal.toggleModal());
    }

}

export default FilmsControls;