const div = document.createElement("div");
const list = document.createElement("ul");
const btnAdd = document.createElement("button");
const input = document.createElement("input");

input.classList.add("input");
input.placeholder = "Додати нове завдання";
btnAdd.textContent = "Додати";
btnAdd.classList.add("btnAdd");

document.body.appendChild(div);
div.appendChild(input);
div.appendChild(btnAdd);
div.appendChild(list);

div.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnAdd")) {
    if (input.value.trim()) {
      const text = input.value.trim();
      const li = document.createElement("li");
      const btnDelete = document.createElement("button");

      btnDelete.textContent = "Видалити";
      btnDelete.classList.add("btnDelete");

      li.append(text, " ", btnDelete);
      list.appendChild(li);
      input.value = "";
    } else {
      alert("Введіть текст");
    }
  }
  if (e.target.classList.contains("btnDelete")) {
    e.target.closest("LI").remove();
  }
});
