const div = document.querySelector("div");
const btnAdd = document.querySelector("button");
const input = document.querySelector("input");
const list = document.createElement("ul");

div.appendChild(list);

btnAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  const btnDelete = document.createElement("button");

  btnDelete.textContent = "Видалити";
  li.textContent = input.value + " ";

  list.appendChild(li);
  li.append(btnDelete);
  input.value = "";
});

list.addEventListener("click", (e) => {
  e.target.closest('LI').remove();
})
