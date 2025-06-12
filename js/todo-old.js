// Example URL: https://michael.team/todo/?user=emilia&list=usa

var params = getParams();

var todoList = JSON.parse(localStorage.getItem(params.save)) || 
  (lists[params.list] 
    ? lists[params.list].map(function(task) { return { text: task, completed: false }; }) 
    : []);

// DOM elements
var taskForm = document.getElementById("taskForm");
var taskInput = document.getElementById("taskInput");
var todoListElement = document.getElementById("todoList");
var resetButton = document.getElementById("resetLink");
var showTaskFormButton = document.getElementById("showTaskFormButton");
var taskFormContainer = document.getElementById("taskFormContainer");
var hideTaskForm = document.getElementById("hideTaskForm");

function capitalizeFirstLetter(text) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";
}

function getParams() {
  var queryString = window.location.search.substring(1);
  var urlParams = queryString.split("&");
  var params = { user: "", list: "", save: "todo" };
  var data = null;

  for (var i = 0; i < urlParams.length; i++) {
    var param = urlParams[i].split("=");
    var key = decodeURIComponent(param[0]);
    var value = decodeURIComponent(param[1]);

    if (key === "user") params.user = value;
    if (key === "list") params.list = value;
    if (key === "data") data = value;
  }

  var listName = "todo";
  var listNamePrint = "";
  var savedListName = "todo";
  var userSpan = params.user || "you";

  if (data) {
    var listdata = decodeURIComponent(data).replace(/%0A/g, "\n");
    var listitems = listdata.split("\n");
    var todoList = [];
    
    for (var j = 0; j < listitems.length; j++) {
      var name = listitems[j].trim();
      if (name.length > 0) {
        todoList.push({ text: name, completed: false });
      }
    }

    localStorage.setItem(savedListName, JSON.stringify(todoList));
    window.history.replaceState({}, document.title, window.location.pathname);
    return { user: "", list: "", save: savedListName };
  }

  if (params.list && lists[params.list]) {
    listName = params.list;
  }

  if (listName !== "todo") {
    savedListName += "-" + listName;
    listNamePrint = ' "' + capitalizeFirstLetter(listName) + '"';
  }

  savedListName += params.user ? "-" + params.user : "";

  document.getElementById("userSpan").textContent = capitalizeFirstLetter(userSpan);
  document.getElementById("listSpan").textContent = listNamePrint;

  return { user: params.user, list: listName, save: savedListName };
}

function saveToLocalStorage() {
  localStorage.setItem(params.save, JSON.stringify(todoList));
}

function updateTaskList() {
  todoListElement.innerHTML = "";

  for (var i = 0; i < todoList.length; i++) {
    var taskObject = todoList[i];
    var listItem = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskObject.completed;
    checkbox.onchange = (function(index) {
      return function() { toggleCompletion(index); };
    })(i);

    var taskText = document.createElement("span");
    taskText.textContent = taskObject.text;
    taskText.style.textDecoration = taskObject.completed ? "line-through" : "none";
    taskText.onclick = (function(cb) {
      return function() { cb.click(); };
    })(checkbox);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.onclick = (function(index) {
      return function() { removeTask(index); };
    })(i);

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    todoListElement.appendChild(listItem);
  }
}

function addTask(task) {
  todoList.push({ text: task, completed: false });
  saveToLocalStorage();
  updateTaskList();

  var firstListItem = todoListElement.lastChild;
  if (firstListItem) {
    firstListItem.classList.add("highlight");
    setTimeout(function() {
      firstListItem.classList.remove("highlight");
    }, 2000);
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
      ? lists[params.list].map(function(task) { return { text: task, completed: false }; }) 
      : [];
    saveToLocalStorage();
    updateTaskList();
  }
}

// Event listeners
taskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var task = taskInput.value.trim();
  if (task) {
    addTask(task);
    taskInput.value = "";
    taskFormContainer.style.display = "none";
    showTaskFormButton.style.display = "inline-block";
  }
});

resetButton.addEventListener("click", resetTodoList);

showTaskFormButton.addEventListener("click", function() {
  taskFormContainer.style.display = "block";
  showTaskFormButton.style.display = "none";
  taskInput.focus();
});

hideTaskForm.addEventListener("click", function() {
  taskFormContainer.style.display = "none";
  showTaskFormButton.style.display = "inline-block";
});

// Initialize the list on page load
updateTaskList();