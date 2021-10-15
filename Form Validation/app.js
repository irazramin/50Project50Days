const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.classList = `form-control error`;
  const small = formControl.querySelector('small');
  small.innerText = msg;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList = 'form-control success';
}

function isEmailValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if(re.test(email.value.trim())){
        showSuccess(email)
    }else{
        showError(email,'Email is not valid')
    }
}

function checkField(inputArr) {
  inputArr.forEach((input) => {
    if (input.value === '') {
      showError(input, `${getErrorName(input)} is required`);
      console.log();
    } else {
      showSuccess(input);
    }
  });
}

function checkPasswordMatch(input1,input2) {
    if(input1.value !== input2.value){
        showError(input2,'Password can not match')
    }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getErrorName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getErrorName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
function getErrorName(input) {
  return input.id.toUpperCase().charAt(0) + input.id.slice(1);
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkField([userName, email, password, password2]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 25);
  checkPasswordMatch(password,password2)
  isEmailValid(email)
});
