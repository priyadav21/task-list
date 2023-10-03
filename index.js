// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Event Listener for adding tasks
addTaskButton.addEventListener("click", addTask);

// Event Listener for deleting tasks
taskList.addEventListener("click", deleteTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const listItem = document.createElement("li");
  listItem.innerHTML = `
        ${taskText}
        <button class="delete-button">Delete</button>
    `;

  taskList.appendChild(listItem);
  taskInput.value = "";
}

// Function to delete a task
function deleteTask(event) {
  if (event.target.classList.contains("delete-button")) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
  }
}
