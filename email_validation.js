//const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.getElementById('form-button');

form.addEventListener("click", function (event) {
    const email = document.getElementById('email-field');
    const emailValue = email.value;
 if(emailValue.toLowerCase() != emailValue) {
    let error_message = "Error: form is not sent. Make sure the email is in lowercase"
    form.setCustomValidity(error_message);
    form.reportValidity();
    return;
}else{
    let error_message = ""
    email.setCustomValidity(error_message);
    email.reportValidity(); 
}
console.log(emailValue);
console.log(emailValue.toLowerCase());
}

)