// Example URL: https://michael.team/todo/?user=emilia&list=usa

// Define variables instead of `const`
var params = getParams(); // Retrieve parameters
var todoList = JSON.parse(localStorage.getItem(params.save)) || lists[params.list].map(function (task) {
    return { text: task, completed: false }; // Safari-friendly function syntax
});

// Reference the HTML elements
var taskForm = document.getElementById("taskForm");
var taskInput = document.getElementById("taskInput");
var todoListElement = document.getElementById("todoList");
var resetButton = document.getElementById("resetLink");

var showTaskFormButton = document.getElementById("showTaskFormButton");
var taskFormContainer = document.getElementById("taskFormContainer");
var hideTaskForm = document.getElementById("hideTaskForm");

// Function to retrieve URL parameters (replaces URLSearchParams)
function getParams() {
    var queryString = window.location.search.slice(1); // Remove the leading "?"
    var queryParams = {};
    var pairs = queryString.split("&");

    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        queryParams[key] = value;
    }

    var user = queryParams['user'];
    var list = queryParams['list'];
    var encodedJson = queryParams['data'];
    if (encodedJson) {
        // Decode and parse the JSON string
        var listdata = JSON.parse(decodeURIComponent(encodedJson));
    }

    var listName = "default";
	var listNamePrint = "";
    if (list && lists[list]) {
        listName = list;
    }
    var userSpan = user ? user : "you";
    var savedListName = "todoList" + user;
    if (listName !== "default") {
        savedListName = "todoList" + user + "-" + listName;
		listNamePrint = " \""+listName+"\"";
    }
    document.getElementById("userSpan").textContent = capitalizeFirstLetter(userSpan);
    document.getElementById("listSpan").textContent = capitalizeFirstLetter(listNamePrint);

    return {
        'user': user,
        'list': listName,
        'save': savedListName
    };
}

// Function to save tasks to Local Storage
function saveToLocalStorage() {
    console.log(params.save);
    localStorage.setItem(params.save, JSON.stringify(todoList));
}

// Function to add a task
function addTask(task) {
    todoList.push({ text: task, completed: false }); // Add a new task object
    saveToLocalStorage();
    updateTaskList();
    // Add highlight manually
    var firstListItem = todoListElement.lastChild;
    if (firstListItem) {
        firstListItem.style.backgroundColor = "#ffff99"; // Highlight color
        setTimeout(function() {
            firstListItem.style.backgroundColor = "#f9f9f9"; // Default color
        }, 2000);
    }
}

// Function to update the HTML view of tasks
function updateTaskList() {
    todoListElement.innerHTML = ""; // Clear the current list

    todoList.forEach(function (taskObject, index) {
        var listItem = document.createElement("li");

        // Create checkbox for task completion
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = taskObject.completed; // Reflect the `completed` state
        checkbox.onchange = function () {
            toggleCompletion(index); // Handle checkbox toggle
        };

        // Create clickable text for task
        var taskText = document.createElement("span");
        taskText.textContent = taskObject.text;
        taskText.style.textDecoration = taskObject.completed ? "line-through" : "none";
        taskText.onclick = function () {
            checkbox.click(); // Simulate checkbox click
        };

        // Add delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️"; // Trash can emoji
        deleteButton.onclick = function () {
            removeTask(index);
        };

        // Assemble task item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        todoListElement.appendChild(listItem);
    });
}

// Function to toggle task completion
function toggleCompletion(index) {
    todoList[index].completed = !todoList[index].completed; // Toggle the `completed` state
    saveToLocalStorage();
    updateTaskList();
}

// Function to remove a task
function removeTask(taskIndex) {
    var confirmed = confirm("Are you sure you want to delete this task?");
    if (confirmed) {
        todoList.splice(taskIndex, 1); // Remove the task
        saveToLocalStorage();
        updateTaskList();
    }
}

// Function to reset the to-do list
function resetTodoList(listName) {
    var confirmed = confirm("Are you sure you want to reset the list?");
    if (confirmed) {
        todoList = lists[params.list].map(function (task) {
            return { text: task, completed: false };
        });
        saveToLocalStorage();
        updateTaskList();
    }
}

// Add event listener for form submission
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var task = taskInput.value.trim();

    if (task) {
        addTask(task);
        taskInput.value = "";
        taskFormContainer.style.display = "none";
        showTaskFormButton.style.display = "inline-block";
    }
});

// Add event listener for Reset button
resetButton.addEventListener("click", function () {
    resetTodoList();
});

// Toggle the visibility of the task form
showTaskFormButton.addEventListener("click", function () {
	taskFormContainer.style.display = "block"; // Show the form
	showTaskFormButton.style.display = "none";
	taskInput.focus();
});

hideTaskForm.addEventListener("click", function () {
	taskFormContainer.style.display = "none"; // Hide the form
	showTaskFormButton.style.display = "inline-block";
});

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(text) {
    if (!text) return ""; // Handle empty or undefined input
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Load the tasks into the HTML on page load
updateTaskList();