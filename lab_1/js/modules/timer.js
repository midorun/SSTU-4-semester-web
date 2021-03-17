import { getZero } from '../services/services';

const timer = () => {
	const hours = document.querySelector('#hours'),
		minutes = document.querySelector('#minutes'),
		seconds = document.querySelector('#seconds'),
		startBtn = document.querySelector('#start'),
		stopBtn = document.querySelector('#stop'),
		resetBtn = document.querySelector('#reset');


	let hoursValue = 0,
		minutesValue = 0,
		secondsValue = 0;

	let timerID;

	const getTimerData = () => {
		hoursValue = hours.value * 1000 * 60 * 60;
		minutesValue = minutes.value * 1000 * 60;
		secondsValue = seconds.value * 1000;

		return hoursValue + minutesValue + secondsValue;
	};

	const getTimeRemaining = () => {
		const t = new Date(getTimerData()) - 1000,
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / (1000 * 60)) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	const startTimer = () => {
		startBtn.classList.add('hide');
		stopBtn.classList.remove('hide');

		const updateTimer = () => {
			const t = getTimeRemaining();
			hours.value = getZero(t.hours);
			minutes.value = getZero(t.minutes);
			seconds.value = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timerID);
			}
		};

		timerID = setInterval(updateTimer, 1000);
		updateTimer();
	};

	const stopTimer = () => {
		startBtn.classList.remove('hide');
		stopBtn.classList.add('hide');
		clearInterval(timerID);
	};

	const resetTimer = () => {
		startBtn.classList.remove('hide');
		stopBtn.classList.add('hide');

		clearInterval(timerID);

		hours.value = 0;
		minutes.value = 0;
		seconds.value = 0;
	};

	startBtn.addEventListener('click', () => startTimer());
	stopBtn.addEventListener('click', () => stopTimer());
	resetBtn.addEventListener('click', () => resetTimer());

	// validation

	const timer = document.querySelector('.timer .col');
	let errorBlock = document.createElement('div'),
		errorMessagesBlock = document.createElement('div');

	errorMessagesBlock.className = 'error__messages';
	errorBlock.className = 'error';
	errorBlock.append(errorMessagesBlock);

	const errorMessages = {
		hours: 'В поле "ч" введены данные неверного формата',
		minutes: 'В поле "м" введены данные неверного формата',
		seconds: 'В поле "с" введены данные неверного формата'
	};

	const renderErrorMessage = (input) => {
		let inputID = input.getAttribute('id');

		const setErrorMessageText = (inputID) => {
			for (const key in errorMessages) {
				if (key === inputID) {
					return errorMessages[key];
				}
			}
		};

		errorMessagesBlock.innerHTML += `
			<span id="${inputID}-error" class="error__message">
				${setErrorMessageText(inputID)}
			</span>
		`;
		input.classList.add('input-invalid');
		timer.append(errorBlock);
	};

	const removeErrorMessage = (input) => {
		let inputID = input.getAttribute('id');

		document.querySelector(`#${inputID}-error`).remove();
		input.classList.remove('input-invalid');
	};

	const toggleStartButton = () => {
		if (errorMessagesBlock.childElementCount) {
			startBtn.disabled = true;
		} else {
			startBtn.disabled = false;
		}
	};

	let inputs = [hours, minutes, seconds];
	inputs.forEach(input => {
		input.addEventListener('change', () => {
			if (isNaN(input.value) || input.value < 0) {
				renderErrorMessage(input);
			} else {
				if (errorMessagesBlock.childElementCount) {
					removeErrorMessage(input);
				}
			}
			toggleStartButton();
		});
	});
};

export default timer;