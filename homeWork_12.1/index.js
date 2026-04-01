const btn = document.createElement("button");
const formRedirect = document.createElement("div");

btn.textContent = "Ввести посилання";
btn.classList.add("addInput");
document.body.appendChild(formRedirect);
formRedirect.appendChild(btn);

formRedirect.addEventListener("click", (e) => {
  if (e.target.classList.contains("addInput")) {
    const input = document.createElement("input");
    const redirectionBtn = document.createElement("button");

    redirectionBtn.textContent = "Перейти";
    redirectionBtn.classList.add("redirect");
    formRedirect.appendChild(input);
    formRedirect.appendChild(redirectionBtn);
  }

  if (e.target.classList.contains("redirect")) {
    const input = formRedirect.querySelector("input");
    if (input.value) {
      location.href = input.value;
    } else {
      alert("Введіть посилання");
    }
  }
});
