import FilmsItem from '../FilmsItem';


export default class FilmsList {
    constructor(data) {
        this.data = data;
    }

    render() {

        const FilmsItems = this.data.map((props) => {
            return new FilmsItem(props)
                .render();
        })

        return (
            `
            <ul class="films-list">
                ${FilmsItems.join('')}
            </ul>
            `
        )
    }
}