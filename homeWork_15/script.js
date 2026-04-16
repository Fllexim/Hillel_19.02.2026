"use strict";

const input = document.querySelector(".form__input");
const form = document.querySelector("form");
const list = document.querySelector("ul");

// Array for LocalStorage

let arrayTodos = JSON.parse(localStorage.getItem("arrayTodos")) || [];

function saveTodos() {
  localStorage.setItem("arrayTodos", JSON.stringify(arrayTodos));
}

// Add Items in DOM

function addItemsInDOM() {
  list.innerHTML = "";

  arrayTodos.forEach((item) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.classList.add("todo-item");
    li.dataset.id = item.id;

    input.type = "checkbox";
    input.checked = item.isDone;

    span.classList.add("todo-item__description");
    span.textContent = item.text;
    span.classList.toggle("todo-item--checked", item.isDone);

    button.classList.add("todo-item__delete");
    button.textContent = "Видалити";

    li.append(input, span, button);
    list.appendChild(li);
  });
}

// Add item in array

function addInArrayTodos(value) {
  const newItem = {
    id: Date.now(),
    text: value,
    isDone: false,
  };

  arrayTodos.push(newItem);
};

// Event 'submit' for new Item

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = input.value.trim();
  if (!value) return;

  addInArrayTodos(value);
  addItemsInDOM();
  saveTodos();

  input.value = "";
});

// Checkbox

list.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const li = event.target.closest("li");
    const spanText = li.querySelector("span");

    const id = Number(li.dataset.id);
    const item = arrayTodos.find((item) => item.id === id);
    item.isDone = event.target.checked;
    saveTodos();

    spanText.classList.toggle("todo-item--checked", event.target.checked);
  }
});

// Button delete

list.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.closest("li");
    const id = Number(li.dataset.id);

    arrayTodos = arrayTodos.filter((item) => item.id !== id);
    saveTodos();
    li.remove();
  }
});

addItemsInDOM();
