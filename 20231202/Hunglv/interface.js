const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const loginBtn = document.querySelector("#login-btn");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const validatePassword = (password) => {
  if(password.length === 0) {
    return 0;
  } else if (password.length < 10) {
    return -1;
  } else {
    return 1;
  }
}

const handleLogin = () => {
  var emailValue = emailInput.value;
  var passwordValue = passwordInput.value;
  if(!validateEmail(emailValue)) {
    emailInput.style.border = "3px solid red";
    alert(" Nhập lại email hoặc mật khẩu");
  } else {
    emailInput.style.border = "1px solid #000";
  }
  if(validatePassword(passwordValue) === 0) {
    passwordInput.style.border = "3px solid red";
    alert("Vui lòng nhập Password");
  } else if (validatePassword(passwordValue) === -1) {
    passwordInput.style.border = "3px solid red";
    alert("Password nhập đủ 10 số");
  } else {
    passwordInput.style.border = "1px solid #000";
  }
  if (validateEmail(emailValue) && validatePassword(passwordValue)) {
  window.open("http://127.0.0.1:5500/New%20folder/login2.html?");
  }
}

loginBtn.addEventListener("click", handleLogin);