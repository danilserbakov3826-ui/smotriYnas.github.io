const inputName = document.querySelector("#input__name");
const inputEmail = document.querySelector("#input__email");
const inputPassword = document.querySelector("#input__password");
const regBtn = document.querySelector(".registration-btn");

function validateField(inputElement, errorMessage) {
  if (inputElement.value.trim() === "") {
    inputElement.style.boxShadow = "1px 1px 10px 2px red";
    inputElement.title = errorMessage;
    return false;
  } else {
    inputElement.style.boxShadow = "";
    inputElement.title = "";
    return true;
  }
}

regBtn.addEventListener("click", function() {
  const isNameValid = validateField(inputName, "Введите ваше имя");
  const isEmailValid = validateField(inputEmail, "Введите email");
  const isPasswordValid = validateField(inputPassword, "Введите пароль");

  if (isNameValid && isEmailValid && isPasswordValid) {
    console.log("Все поля заполнены корректно");
  } 
  else {
    alert("Пожалуйста, заполните все поля!");
  }
});