import FilmsFilter from './FilmsFilter';
import ModalAddFilm from './ModalAddFilm';

class FilmsControls {
    constructor(data, filterSettings) {
        this.data = data;
        this.filterSettings = filterSettings;
    }

    render() {
        return (
            `
            <ul class="films-controls">
                <li class="films-controls-item">
                    ${new FilmsFilter().render('country', this.data, this.filterSettings['country'])}   
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

    static addEventListeners(MODAL_ROOT, addFilmsItem, filterFilms) {
        document.querySelector('.films-controls-add')
            .addEventListener('click', () => {
                return new ModalAddFilm(addFilmsItem)
                    .render(MODAL_ROOT)
                    .addEventListeners();
            });
        document.querySelector('#country')
            .addEventListener('change', (e) => {
                let field = e.target.getAttribute('id');
                let value = e.target.value;
                let filterSettings = JSON.parse(localStorage.getItem('filterSettings'));
                filterSettings[field] = value;
                localStorage.setItem('filterSettings', JSON.stringify(filterSettings));
                filterFilms();
            })

    }
}

export default FilmsControls;