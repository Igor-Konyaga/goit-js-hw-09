const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

formEl.addEventListener('submit', onFormSumbmit);

function onFormSumbmit(e) {
  e.preventDefault();

  let delayValue = Number(delayEl.value);
  let stepValue = Number(stepEl.value);
  let amountValue = Number(amountEl.value);

  if (delayValue < 0 || stepValue < 0 || amountValue <= 0) {
	console.log('Заповніть коректно поля!!!')
	formEl.reset()
    return;
  }

  for (let index = 1; index <= amountValue; index++) {
    createPromise(index, delayValue)
      .then(({ position, delay }) =>
        console.log(`✅ Fulfilled promise ${position} in ${delay} ms`)
      )
      .catch(({ position, delay }) =>
        console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    delayValue += stepValue;
  }

  formEl.reset();
}
