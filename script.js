let tasks = []; // Empty array to hold tasks

// Add task when button is clicked
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Add task when Enter key is pressed
document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    let taskInput = document.getElementById('taskInput').value.trim();

    // Check if input is not empty
    if (taskInput) {
        tasks.push(taskInput);

        // Clear input field
        document.getElementById('taskInput').value = '';

        // Update task list display
        displayTasks();
    }
}

function displayTasks() {
    let taskList = document.getElementById('taskList');

    // Clear existing list
    taskList.innerHTML = '';

    // Loop through tasks
    tasks.forEach((task, index) => {
        let li = document.createElement('li');

        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        );

        li.innerHTML = `
            ${task}
            <button class="btn btn-primary btn-sm" onclick="removeTask(${index})">✓</button>
        `;

        taskList.appendChild(li);
    });
}

function launchConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#68d8d6', '#7DF9FF', '#B2FFFF', '#99FFFF', '#DFFFFD'];
    const pieces = 80;

    for (let i = 0; i < pieces; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const size = Math.floor(Math.random() * 8) + 6;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${Math.floor(size * 0.4)}px`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        confetti.style.animationDuration = `${1.8 + Math.random() * 0.8}s`;

        container.appendChild(confetti);

        setTimeout(() => {
            if (container.contains(confetti)) {
                container.removeChild(confetti);
            }
        }, 3000);
    }
}

function removeTask(index) {
    launchConfetti();
    tasks.splice(index, 1);
    displayTasks();
}

// Clear all tasks
document.getElementById('clearTaskBtn').addEventListener('click', function () {
    tasks = [];
    displayTasks();
});