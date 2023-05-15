const inputTask = document.querySelector(".input-task");
const btnTask = document.querySelector(".btn-task");
const tasks = document.querySelector(".tasks");

const createList = () => {
  const list = document.createElement("li");
  return list;
};

inputTask.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

const cleanInput = () => {
  inputTask.value = "";
  inputTask.focus();
};

const createDeleteBtn = (list) => {
  list.innerText += " ";
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Apagar";
  deleteBtn.setAttribute("class", "delete");
  list.appendChild(deleteBtn);
};

const createTask = (inputText) => {
  const list = createList();
  list.innerText = inputText;
  tasks.appendChild(list);
  cleanInput();
  createDeleteBtn(list);
  saveTasks();
};

btnTask.addEventListener("click", () => {
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("delete")) {
    el.parentElement.remove();
    saveTasks();
  }
});

const saveTasks = () => {
  const liTasks = tasks.querySelectorAll("li");
  const taskLists = [];

  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace("Apagar", "");
    console.log(taskText);
    taskLists.push(taskText);
  }
  const tasksJSON = JSON.stringify(taskLists);
  localStorage.setItem("tasks", tasksJSON);
};

const addSavedTasks = () => {
  const tasks = localStorage.getItem("tasks");
  const taskLists = JSON.parse(tasks);
  for (let task of taskLists) {
    createTask(task);
  }
};

addSavedTasks();
