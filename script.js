// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Alert if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item and remove button
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // When remove button is clicked, remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add the button to the list item and append it to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // When button is clicked, add a task
    addButton.addEventListener('click', addTask);

    // Allow adding a task by pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    
    addTask();
});
