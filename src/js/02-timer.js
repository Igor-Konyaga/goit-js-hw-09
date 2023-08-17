import flatpickr from 'flatpickr';
import('flatpickr/dist/themes/dark.css');
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('[type="text"]');
const btnEl = document.querySelector('[type="button"]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const resetEl = document.querySelector('.btn');

let id = null;
let userDate = null;

btnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      window.alert('Please choose a date in the future');
      userDate = null;
    } else {
      btnEl.disabled = false;
      userDate = selectedDates[0];
    }
  },
};

flatpickr(inputEl, options);

btnEl.addEventListener('click', onStartCountDown);

function onStartCountDown(e) {
  id = setInterval(() => {
    let timeDifference = userDate - new Date();
    let convert = convertMs(timeDifference);

    btnEl.disabled = true;
    inputEl.disabled = true;

    days.textContent = addLeadingZero(convert.days);
    hours.textContent = addLeadingZero(convert.hours);
    minutes.textContent = addLeadingZero(convert.minutes);
    seconds.textContent = addLeadingZero(convert.seconds);

    if (
      days.textContent === '00' &&
      hours.textContent === '00' &&
      minutes.textContent === '00' &&
      seconds.textContent === '00'
    ) {
      clearInterval(id);
    }
  }, 1000);
}

resetEl.addEventListener('click', onReset);

function onReset() {
  btnEl.disabled = false;
  inputEl.disabled = false;

  clearInterval(id);

  days.textContent = '00';
  hours.textContent = '00';
  minutes.textContent = '00';
  seconds.textContent = '00';
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
