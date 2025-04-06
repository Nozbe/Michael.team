// Example URL: https://michael.team/todo/?user=emilia&list=usa

const params = getParams();
let todoList = JSON.parse(localStorage.getItem(params.save)) || lists[params.list].map(task => ({ text: task, completed: false }));

// Reference the HTML elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const todoListElement = document.getElementById("todoList");
const resetButton = document.getElementById("resetButton");

function getParams () {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const user = urlParams.get('user');
	const list = urlParams.get('list');
	const encodedJson = urlParams.get('data');
	if (encodedJson) {
    	// Decode and parse the JSON string
    	const listdata = JSON.parse(decodeURIComponent(encodedJson));
	}
	let listName = "default";
	let listNamePrint = "";
	if (list) {
//		console.log(lists[list]);
		if (lists[list]) {
			listName = list;
		}
	}
	let userSpan = user;
	if (!user) {
		userSpan = "you";
	}
	let savedListName = "todoList"+user;
	if (listName!=="default") {
		savedListName = "todoList"+user+"-"+listName;
		listNamePrint = " \""+listName+"\"";
	}
	document.getElementById("userSpan").textContent = capitalizeFirstLetter(userSpan);
	document.getElementById("listSpan").textContent = capitalizeFirstLetter(listNamePrint);
	return {
		'user' : user,
		'list' : listName,
		'save' : savedListName
	}
}

// Function to save tasks to Local Storage
function saveToLocalStorage() {
	console.log(params.save);
    localStorage.setItem(params.save, JSON.stringify(todoList));
}

// Function to add a task
function addTask(task) {
    todoList.push({ text: task, completed: false }); // Add a new task object with `completed` state
    saveToLocalStorage();
    updateTaskList();
}

// Function to update the HTML view of tasks
function updateTaskList() {
    todoListElement.innerHTML = ""; // Clear the current list

    todoList.forEach((taskObject, index) => {
        const listItem = document.createElement("li");

        // Create checkbox for task completion
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = taskObject.completed; // Reflect the `completed` state
        checkbox.onchange = () => toggleCompletion(index); // Handle checkbox toggle

        // Create clickable text for task
        const taskText = document.createElement("span");
        taskText.textContent = taskObject.text;
        taskText.style.textDecoration = taskObject.completed ? "line-through" : "none"; // Strike-through if completed
        taskText.onclick = () => checkbox.click(); // Simulate a checkbox click

        // Add delete button (now using a trash can emoji)
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️"; // Trash can emoji
        deleteButton.onclick = () => removeTask(index);
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
   const confirmed = confirm("Are you sure you want to delete this task?"); // Confirmation dialog
    if (confirmed) { 
		todoList.splice(taskIndex, 1); // Remove the task
    	saveToLocalStorage();
    	updateTaskList();
	}
}

// Function to reset the to-do list
function resetTodoList(listName) {
    // Show a confirmation dialog
    const confirmed = confirm("Are you sure you want to reset the list?");
    if (confirmed) {
    	todoList = lists[params.list].map(task => ({ text: task, completed: false })); // Reset to predefined items
    	saveToLocalStorage();
		updateTaskList();
	}
}

// Event listener for form submission
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = taskInput.value.trim();

    if (task) {
        addTask(task);
        taskInput.value = "";
    }
});

// Event listener for Reset button
resetButton.addEventListener("click", () => {
    resetTodoList();
});

//Capitalize first letter
function capitalizeFirstLetter(text) {
    if (!text) return ""; // Handle empty or undefined input
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Load the tasks into the HTML on page load
updateTaskList();