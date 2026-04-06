const form = document.querySelector("form");

const checkValue = (input, regExp) => {
  if (!regExp.test(input.value)) {
    input.nextElementSibling.classList.add("active");
    return false;
  } else {
    input.nextElementSibling.classList.remove("active");
    return true;
  }
};

const validateValue = (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll(".form-control");

  const isNameValid = checkValue(inputs[0], /^[a-z]{2,}$/i);
  const isPassValid = checkValue(inputs[1], /^.{5,}$/);
  const isPhoneValid = checkValue(inputs[2], /^\+380\d{9}$/);
  const isEmailValid = checkValue(inputs[3], /^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/i);

  if (isNameValid && isPassValid && isPhoneValid && isEmailValid) {
    const formData = new FormData(event.target);
    const formObj = {};

    formData.forEach((value, key) => {
      formObj[key] = value;
    });

    console.log(formObj);
  }
};

form.addEventListener("submit", validateValue);