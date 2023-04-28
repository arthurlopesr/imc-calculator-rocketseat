import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notNumber } from './utils.js'
import { calculatorIMC } from './utils.js'

const form = document.querySelector('.form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (e) => {
  e.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height)
  if (weightOrHeightIsNotNumber) {
    AlertError.alertErroInsert();
    return;
  } else {
    AlertError.alertErroRemove();
  }

  const result = calculatorIMC(weight, height);
  displayResultMessege(result);
}

function displayResultMessege(result) {
  const messege = `Seu IMC é de ${result}`;

  Modal.messege.innerText = messege;
  Modal.open()
}