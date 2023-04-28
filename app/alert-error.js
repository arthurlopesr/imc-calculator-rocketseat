export const AlertError = {
  elelement: document.querySelector('.alert-error'),
  alertErroInsert: () => {
    AlertError.elelement.classList.add('open')
  },
  alertErroRemove: () => {
    AlertError.elelement.classList.remove('open')
  }
}