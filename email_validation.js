function checkInput() {
  let strTemp = '';
  let lowerCaseString = '';

  strTemp = document.forms['contact-form'].EMAIL.value; 

  lowerCaseString = String(strTemp).toLowerCase();

  console.log(strTemp);
  console.log(lowerCaseString);
}