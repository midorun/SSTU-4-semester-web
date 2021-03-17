import changeUserName from './modules/changeUserName';
import triangle from './modules/triangle';
import strings from './modules/strings';
import array from './modules/array';
import timer from './modules/timer';
import test from './modules/test';
import screensaver from './modules/screensaver';

document.addEventListener('DOMContentLoaded', function () {

    changeUserName();

    triangle();

    strings();

    array('.array__data input', '.array__btn', '#min', '#max');

    timer();

    test();

    screensaver();
});