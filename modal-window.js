const openModalButtons = document.querySelectorAll('');
const closeModalButtons = document.querySelector('');


/** Implement function here  */

openModalButtons.forEach(button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector( /**required value should be added here */);
    openModal(modal);
  })
}

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    /** Add whatever is required here to implement this requirement */
  })
})

const openModal = (modal) => {
  if (modal == null) return;
  modal.classList.add('active');
  // add whatever is required 
}

const closeModal = (modal) => {
  if (modal == null) return
  modal.classList.remove('active');
  // add whatever is required
}