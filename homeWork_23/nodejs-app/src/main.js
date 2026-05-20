"use strict";

import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery";

const input = $(".form-control");
const form = $("form");
const list = $("ul");
const taskModal = $("#taskModal");

const BASE_URL = "http://localhost:8080/todos";

async function getTodos() {

  const response = await fetch(BASE_URL);

  const todos = await response.json();

  addItemsInDOM(todos);
}

function addItemsInDOM(todos) {
  list.html("");

  todos.forEach((item) => {
    const li = $("<li>");
    const checkbox = $("<input>");
    const span = $("<span>");
    const button = $("<button>");

    li.addClass(
      "d-flex justify-content-between align-items-center mt-2 rounded-2 bg-light p-2",
    );

    li.attr("data-id", item._id);

    checkbox.attr("type", "checkbox").prop("checked", item.checked);

    span.addClass("flex-grow-1 ps-2").text(item.text);
    span.toggleClass("text-decoration-line-through", item.checked);

    button.addClass("btn btn-danger").text("Видалити");

    li.append(checkbox, span, button);
    list.append(li);
  });
}

async function createTodo(text) {
  await fetch(BASE_URL, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      text,

      checked: false,
    }),
  });

  getTodos();
}

async function deleteTask(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  getTodos();
}

async function updateTodo(id, checked) {
  await fetch(`${BASE_URL}/${id}`, {

    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      checked,
    }),
  });

  getTodos();
}

form.on("submit", async (event) => {
  event.preventDefault();

  const value = input.val().trim();

  if (!value) return;

  await createTodo(value);

  input.val("");
});

function openModal() {
  const modal = new bootstrap.Modal(taskModal);

  modal.show();
}

list.on("click", async (event) => {
  const target = $(event.target);
  const li = target.closest("li");
  const id = li.data("id");

  if (target.is("button")) {
    await deleteTask(id);

    return;
  }

  if (target.attr("type") === "checkbox") {
    await updateTodo(id, event.target.checked);

    return;
  }

  openModal();
});

getTodos();