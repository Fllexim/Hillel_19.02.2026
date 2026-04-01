const div = document.createElement("div");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

btn1.textContent = "Кнопка 1";
btn1.classList.add("btn-1");

btn2.textContent = "Кнопка 2";
btn2.classList.add("btn-2");

btn3.textContent = "Кнопка 3";
btn3.classList.add("btn-3");

document.body.appendChild(div);
div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3);

div.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-1")) {
    alert(`Клікнуто по кнопці: ${btn1.textContent}`);
  }
  if (e.target.classList.contains("btn-2")) {
    alert(`Клікнуто по кнопці: ${btn2.textContent}`);
  }
  if (e.target.classList.contains("btn-3")) {
    alert(`Клікнуто по кнопці: ${btn3.textContent}`);
  }
});
