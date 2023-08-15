const startEl = document.querySelector('[data-start]');
const stoptEl = document.querySelector('[data-stop]');
const bodyEl = document.body;

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startEl.addEventListener('click', onColorChange);

function onColorChange(e) {
  timerId = setInterval(
    () => (bodyEl.style.backgroundColor = getRandomHexColor()),
    1000
  );
  startEl.disabled = true;
}

stoptEl.addEventListener('click', stopColorChange);

function stopColorChange() {
  clearInterval(timerId);
  startEl.disabled = false;
}


