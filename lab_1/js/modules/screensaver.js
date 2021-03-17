const screensaver = () => {
    const date = document.querySelector('.modal__date'),
        username = document.querySelector('.modal__username'),
        modal = document.querySelector('.modal'),
        modalData = document.querySelector('.modal__data'),
        btn = document.querySelector('.screensaver__btn');

    btn.addEventListener('click', () => {
        modal.classList.remove('hide');
        date.textContent = (new Date().toDateString());
        username.textContent = localStorage.getItem('user-name');

    });

    modalData.addEventListener('click', () => {
        modal.classList.add('hide');
    });

};

export default screensaver;