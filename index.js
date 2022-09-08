const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkForm();
});

function checkForm() {
  const formControls = form.querySelectorAll(".form-control");
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });
  if (formIsValid) {
    console.log("O formulário está validado e pronto para o envio!");
  } else {
    // executa a validação de todos os campos para dar o feedback ao usuário do que falta preencher
    checkInputUsername(document.querySelector("#username"));
    checkInputEmail(document.querySelector("#email"));
    checkInputPassword(document.querySelector("#password"));
    checkInputPasswordConfirmation(
      document.querySelector("#password-confirmation")
    );
  }
}

function checkInputUsername(username) {
  const usernameValue = username.value;
  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSucessFor(username);
  }
}
function checkInputEmail(email) {
  const emailValue = email.value;
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSucessFor(email);
  }
}
function checkInputPassword(password) {
  const passwordValue = password.value;
  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "A senha precisa ter no mínimo 6 caracteres.");
  } else {
    setSucessFor(password);
  }
}
function checkInputPasswordConfirmation(passwordConfirmation) {
  const passwordConfirmationValue = passwordConfirmation.value;
  const passwordValue = document.querySelector("#password").value;
  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatória.");
  } else if (passwordConfirmationValue.length < 6) {
    setErrorFor(
      passwordConfirmation,
      "A senha precisa ter no mínimo 6 caracteres."
    );
  } else if (!(passwordConfirmationValue === passwordValue)) {
    setErrorFor(passwordConfirmation, "As senhas não são iguais.");
  } else {
    setSucessFor(passwordConfirmation);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
  small.innerText = message;
}

function setSucessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
