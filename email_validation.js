const submit = document.getElementById('submit');
const emailError = document.getElementById('err');
let errorMessage = '';

function isLowerCase(characters) {
  return characters === characters.toLowerCase() && characters !== characters.toUpperCase();
}

function validateEmail() {
  let emailValue = '';
  const email = document.getElementById('email');
  emailValue = email.value;

  if (isLowerCase(String(emailValue))) {
    emailError.textContent = '';
  } else {
    errorMessage = 'Form not sent. Please enter email in lowercase';
    emailError.textContent = errorMessage;
  }
}

submit.addEventListener('click', validateEmail);
