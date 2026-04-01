const div = document.querySelector("#div")

div.addEventListener("click", (e) => {
  const btn = e.target.textContent;
  alert(`Клікнуто по кнопці: ${btn}`)
});
