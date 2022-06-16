const myContactForm = document.getElementById('form-button');
let errorMessage = '';

const validateEmail = => {
  mycontactForm.addEventListener('click', (event) => {
    const emailValue = document.getElementById('email-field').value;
    if (emailValue.toLowerCase() != emailValue) {
      errorMessage = 'Error: form is not sent. Make sure the email is in lowercase';
      myContactForm.setCustomValidity(error_message);
      myContactForm.reportValidity();
      return false;
    }
    emailValue.setCustomValidity(errorMessage);
    emailValue.reportValidity();
  });
};
