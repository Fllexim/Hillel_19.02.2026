"use strict";

const input = $(".form-control");
const form = $("form");
const list = $("ul");
const taskModal = $("#taskModal");

// Array for LocalStorage

let arrayTodos = JSON.parse(localStorage.getItem("arrayTodos")) || [];
function saveTodos() {
  localStorage.setItem("arrayTodos", JSON.stringify(arrayTodos));
}

// Add Items in DOM

function addItemsInDOM() {
  list.html("");
  arrayTodos.forEach(item => {
    const li = $("<li>");
    const checkbox = $("<input>");
    const span = $("<span>");
    const button = $("<button>");
    li.addClass("d-flex justify-content-between align-items-center mt-2 rounded-2 bg-light p-2");
    li.attr("data-id", item.id);
    checkbox.attr("type", "checkbox").prop("checked", item.isDone);
    span.addClass("flex-grow-1 ps-2").text(item.text);
    span.toggleClass("text-decoration-line-through", item.isDone);
    button.addClass("btn btn-danger").text("Видалити");
    li.append(checkbox, span, button);
    list.append(li);
  });
}

// Add item in array

function addInArrayTodos(value) {
  const newItem = {
    id: Date.now(),
    text: value,
    isDone: false
  };
  arrayTodos.push(newItem);
}

// Event 'submit' for new Item

form.on("submit", event => {
  event.preventDefault();
  const value = input.val().trim();
  if (!value) return;
  addInArrayTodos(value);
  addItemsInDOM();
  saveTodos();
  input.val("");
});

// Checkbox

function saveCheckbox(li) {
  const spanText = li.find("span");
  const id = li.data("id");
  const item = arrayTodos.find(item => item.id === id);
  item.isDone = event.target.checked;
  saveTodos();
  spanText.toggleClass("text-decoration-line-through", event.target.checked);
}

// Button delete

function deleteTask(li) {
  const id = li.data("id");
  arrayTodos = arrayTodos.filter(item => item.id !== id);
  saveTodos();
  li.remove();
}

// Open openModa

function openModal(li) {
  const modal = new bootstrap.Modal(taskModal);
  modal.show();
}

// ON list

list.on("click", event => {
  const target = $(event.target);
  const li = target.closest("li");
  if (target.is("button")) {
    deleteTask(li);
    return;
  }
  if (target.attr("type") === "checkbox") {
    saveCheckbox(li);
    return;
  }
  openModal(li);
});
addItemsInDOM();