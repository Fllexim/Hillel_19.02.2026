"use strict";

var input = $(".form-control");
var form = $("form");
var list = $("ul");
var taskModal = $("#taskModal");

// Array for LocalStorage

var arrayTodos = JSON.parse(localStorage.getItem("arrayTodos")) || [];
function saveTodos() {
  localStorage.setItem("arrayTodos", JSON.stringify(arrayTodos));
}

// Add Items in DOM

function addItemsInDOM() {
  list.html("");
  arrayTodos.forEach(function (item) {
    var li = $("<li>");
    var checkbox = $("<input>");
    var span = $("<span>");
    var button = $("<button>");
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
  var newItem = {
    id: Date.now(),
    text: value,
    isDone: false
  };
  arrayTodos.push(newItem);
}

// Event 'submit' for new Item

form.on("submit", function (event) {
  event.preventDefault();
  var value = input.val().trim();
  if (!value) return;
  addInArrayTodos(value);
  addItemsInDOM();
  saveTodos();
  input.val("");
});

// Checkbox

function saveCheckbox(li) {
  var spanText = li.find("span");
  var id = li.data("id");
  var item = arrayTodos.find(function (item) {
    return item.id === id;
  });
  item.isDone = event.target.checked;
  saveTodos();
  spanText.toggleClass("text-decoration-line-through", event.target.checked);
}

// Button delete

function deleteTask(li) {
  var id = li.data("id");
  arrayTodos = arrayTodos.filter(function (item) {
    return item.id !== id;
  });
  saveTodos();
  li.remove();
}

// Open openModa

function openModal(li) {
  var modal = new bootstrap.Modal(taskModal);
  modal.show();
}

// ON list

list.on("click", function (event) {
  var target = $(event.target);
  var li = target.closest("li");
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