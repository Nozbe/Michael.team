// Example URL: https://michael.team/todo/?user=emilia&list=usa

const params = getParams();

let todoList =
  JSON.parse(localStorage.getItem(params.save)) ||
  (lists[params.list]
    ? lists[params.list].map((task) => ({ text: task, completed: false }))
    : []);

// DOM elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const todoListElement = document.getElementById("todoList");
const resetButton = document.getElementById("resetLink");
const showTaskFormButton = document.getElementById("showTaskFormButton");
const taskFormContainer = document.getElementById("taskFormContainer");
const hideTaskForm = document.getElementById("hideTaskForm");

function capitalizeFirstLetter(text) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";
}

function getParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const user = urlParams.get("user");
  const list = urlParams.get("list");
  const data = urlParams.get("data");

  let listName = "todo";
  let listNamePrint = "";
  let savedListName = "todo";
  let userSpan = user || "you";

  if (data) { //support for Shortcut that sends multiple lines of text
// https://www.icloud.com/shortcuts/f148da9d53dc406f9ea3c22f6f72320b
    const listdata = decodeURIComponent(data).replace(/%0A/g, "\n");
    const listitems = listdata
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const todoList = listitems.map((name) => ({ text: name, completed: false }));
    localStorage.setItem(savedListName, JSON.stringify(todoList));

    window.history.replaceState({}, document.title, window.location.pathname);
    return { user: "", list: "", save: savedListName };
  }

  if (list && lists[list]) {
    listName = list;
  }
  
  if (listName !== "todo") {
    savedListName += `-${listName}`;
    listNamePrint = ` "${capitalizeFirstLetter(listName)}"`;
  }

  savedListName += user ? `-${user}` : "";
  
  document.getElementById("userSpan").textContent = capitalizeFirstLetter(userSpan);
  document.getElementById("listSpan").textContent = listNamePrint;

  return { user, list: listName, save: savedListName };
}

function saveToLocalStorage() {
  localStorage.setItem(params.save, JSON.stringify(todoList));
}

function updateTaskList() {
  todoListElement.innerHTML = "";
  
  todoList.forEach((taskObject, index) => {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskObject.completed;
    checkbox.onchange = () => toggleCompletion(index);

    const taskText = document.createElement("span");
    taskText.textContent = taskObject.text;
    taskText.style.textDecoration = taskObject.completed ? "line-through" : "none";
    taskText.onclick = () => checkbox.click();

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.onclick = () => removeTask(index);

    listItem.append(checkbox, taskText, deleteButton);
    todoListElement.appendChild(listItem);
  });
}

function addTask(task) {
  todoList.push({ text: task, completed: false });
  saveToLocalStorage();
  updateTaskList();

  const firstListItem = todoListElement.lastChild;
  if (firstListItem) {
    firstListItem.classList.add("highlight");
    setTimeout(() => firstListItem.classList.remove("highlight"), 2000);
  }
}

function toggleCompletion(index) {
  todoList[index].completed = !todoList[index].completed;
  saveToLocalStorage();
  updateTaskList();
}

function removeTask(taskIndex) {
  if (confirm("Are you sure you want to delete this task?")) {
    todoList.splice(taskIndex, 1);
    saveToLocalStorage();
    updateTaskList();
  }
}

function resetTodoList() {
  if (confirm("Are you sure you want to reset the list?")) {
    todoList = lists[params.list]
      ? lists[params.list].map((task) => ({ text: task, completed: false }))
      : [];
    saveToLocalStorage();
    updateTaskList();
  }
}

// Event listeners
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = taskInput.value.trim();
  
  if (task) {
    addTask(task);
    taskInput.value = "";
    taskFormContainer.style.display = "none";
    showTaskFormButton.style.display = "inline-block";
  }
});

resetButton.addEventListener("click", resetTodoList);

showTaskFormButton.addEventListener("click", () => {
  taskFormContainer.style.display = "block";
  showTaskFormButton.style.display = "none";
  taskInput.focus();
});

hideTaskForm.addEventListener("click", () => {
  taskFormContainer.style.display = "none";
  showTaskFormButton.style.display = "inline-block";
});

// Initialize the list on page load
updateTaskList();