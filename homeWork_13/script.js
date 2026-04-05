const form = document.querySelector("form");
const inputName = document.querySelector("#exampleFormControlInput1");
const inputMassage = document.querySelector("#exampleFormControlTextarea1");
const inputPhone = document.querySelector("#exampleFormControlInput2");
const inputEmail = document.querySelector("#exampleFormControlInput3");

const namePattern = /^[a-z]{2,}$/i;
const massagePattern = /^.{5,}$/;
const phonePattern = /^\+380\d{9}$/;
const emailPattern = /^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,}$/i;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let error = 0;

  const regExpName = namePattern.test(inputName.value);
  const regExpMassage = massagePattern.test(inputMassage.value);
  const regExpPhone = phonePattern.test(inputPhone.value);
  const regExpEmail = emailPattern.test(inputEmail.value);

  if (!regExpName) {
    inputName.nextElementSibling.classList.add("active");
    error++;
  } else {
    inputName.nextElementSibling.classList.remove("active");
  };
  if (!regExpMassage) {
    inputMassage.nextElementSibling.classList.add("active");
    error++;
  } else {
    inputMassage.nextElementSibling.classList.remove("active");
  }
  if (!regExpPhone) {
    inputPhone.nextElementSibling.classList.add("active");
    error++;
  } else {
    inputPhone.nextElementSibling.classList.remove("active");
  }
  if (!regExpEmail) {
    inputEmail.nextElementSibling.classList.add("active");
    error++;
  } else {
    inputEmail.nextElementSibling.classList.remove("active");
  }

  if (error === 0) {
    const formData = new FormData(event.target);
    const formObj = {};

    formData.forEach((value, key) => (formObj[key] = value));
    console.log(formObj);
  }
});
