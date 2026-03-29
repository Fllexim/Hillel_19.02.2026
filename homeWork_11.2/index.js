const text = document.querySelector("#text");
const button = document.querySelector("#button");

button.addEventListener("click", function() {
    text.classList.toggle("red")
})