export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  messege: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  open: () => {
    Modal.wrapper.classList.add('open')
  },
  close: () => {
    Modal.wrapper.classList.remove('open')
  }
};

Modal.buttonClose.onclick = () => {
  Modal.close()
}

//keydown ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    Modal.close();
  }
})