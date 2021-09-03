const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "toDos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
  span.innerText = newTodo;
  list.appendChild(span);
  list.appendChild(btn);
  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  const newTodo = toDoInput.value;

  event.preventDefault();
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
