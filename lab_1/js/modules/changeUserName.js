function changeUserName() {
    const authInput = document.querySelector('.auth__input');
    const authButton = document.querySelector('.auth__btn');
    const authInfo = document.querySelector('.auth__info');
    const userName = document.querySelector('.profile__username');

    if (localStorage.getItem('user-name')) {
        userName.textContent = localStorage.getItem('user-name');
        hideInput();
    } else {
        authButton.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.setItem('user-name', authInput.value);
            hideInput();
            userName.textContent = localStorage.getItem('user-name');
        });
    }

    function hideInput() {
        authInput.classList.add('hide');
        authButton.classList.add('hide');
        authInfo.classList.add('hide');
    }
}

export default changeUserName;