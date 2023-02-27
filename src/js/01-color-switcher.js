function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;

buttonStart.addEventListener('click', startChangeColor);
buttonStop.addEventListener('click', stopChangeColor);

function startChangeColor(evt) {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
}

function stopChangeColor(evt) {
  clearInterval(timerId);
  buttonStop.disabled = true;
  buttonStart.disabled = false;
}
