const form = document.getElementById('form-button');
let errorMessage = '';

form.addEventListener('click', function (event) {
  const email = document.getElementById('email-field');
  const emailValue = email.value;
  if (emailValue.toLowerCase() != emailValue) {
    error_message = 'Error: form is not sent. Make sure the email is in lowercase';
    form.setCustomValidity(error_message);
    form.reportValidity();
    return;
  } else {
    const error_message = '';
    email.setCustomValidity(error_message);
    email.reportValidity();
  }
});
