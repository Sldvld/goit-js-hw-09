import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    start: document.querySelector('button[data-start]'),
    input: document.querySelector('#datetime-picker'),
    day:document.querySelector('span[data-days]'),
    hour: document.querySelector('span[data-hours]'),
    minute: document.querySelector('span[data-minutes]'),
    second: document.querySelector('span[data-seconds]'),
}
let timerId = null;

refs.start.disabled = true;
refs.start.addEventListener('click', startTimer);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentTime = new Date();
        console.log(currentTime);
        if (selectedDates[0] - currentTime > 0) {
            refs.start.disabled = false;
          } else {
            refs.start.disabled = true;
            Notify.info('Please choose a date in the future');
  }}}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  function startTimer() {
    const selectedDate = inputEl.selectedDates[0];
    console.log(selectedDate);
    timerId = setInterval(() => {
      const startTime = new Date();
      const gapTime = selectedDate - startTime;
      refs.start.disabled = true;
      if (gapTime < 0) {
        clearInterval(timerId);
        return;
      }
      changeMarkup(convertMs(gapTime));
    }, 1000);
  }

  function changeMarkup ({ days, hours, minutes, seconds }){
    refs.day.textContent = addLeadingZero(days),
    refs.hour.textContent = addLeadingZero(hours),
    refs.minute.textContent = addLeadingZero(minutes),
    refs.second.textContent = addLeadingZero(seconds)
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  const inputEl = flatpickr('#datetime-picker', options);