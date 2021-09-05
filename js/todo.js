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
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodoObj) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  list.id = newTodoObj.id;
  btn.innerText = "✔";
  btn.addEventListener("click", deleteTodo);
  span.innerText = newTodoObj.text;
  list.appendChild(btn);
  list.appendChild(span);
  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  const newTodo = toDoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  event.preventDefault();
  toDoInput.value = "";
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
