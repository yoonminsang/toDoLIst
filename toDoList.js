const toDoListForm = document.querySelector(".js-toDoListForm"),
  toDoListForm_form = toDoListForm.querySelector("form"),
  toDoList = document.querySelector(".js-toDoList"),
  TODO = "toDoList";

let toDoArr = [];

function loadToDo() {
  const loadToDoArr = localStorage.getItem(TODO);
  if (loadToDoArr) {
    toDoArr = JSON.parse(loadToDoArr);
    toDoArr.forEach((val) => {
      printToDo(val.id, val.toDo);
    });
  }
}

function onSubmit(e) {
  e.preventDefault();
  const toDo = toDoListForm_form.toDo.value;
  const id = toDoArr.length > 0 ? toDoArr[toDoArr.length - 1].id + 1 : 1;
  toDoArr.push({ id, toDo });
  printToDo(id, toDo);
  saveToDo();
  toDoListForm_form.toDo.value = "";
}

function printToDo(id, toDo) {
  const li = document.createElement("li");
  li.id = id;
  const span = document.createElement("span");
  span.innerText = toDo;
  li.appendChild(span);
  const btn = document.createElement("input");
  btn.type = "button";
  btn.value = "x";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function deleteToDo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  toDoArr = toDoArr.filter((toDo) => {
    return toDo.id != li.id;
  });
  saveToDo();
  toDoList.removeChild(li);
}

function saveToDo() {
  toDoArr = toDoArr.map((obj, idx) => {
    const rObj = {};
    rObj.id = idx + 1;
    rObj.toDo = obj.toDo;
    return rObj;
  });
  localStorage.setItem(TODO, JSON.stringify(toDoArr));
}

function init() {
  loadToDo();
  toDoListForm_form.addEventListener("submit", onSubmit);
}

init();
