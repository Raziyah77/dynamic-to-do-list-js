// Select DOM elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load tasks from Local Storage when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

// Function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => {
        addTask(taskText, false); // false = don't resave to storage
    });
}

// Function to add a task
function addTask(taskText = null, save = true) {
    // Get task text from input if not provided
    if (!taskText) {
        taskText = taskInput.value.trim();
    }

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new task element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    // Remove task on click
    removeButton.onclick = () => {
        taskList.removeChild(li);
        removeFromLocalStorage(taskText);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";

    // Save to Local Storage
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

// Remove task from Local Storage
function removeFromLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

// Add task on button click
addButton.addEventListener('click', () => {
    addTask();
});

// Add task on Enter key press
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
