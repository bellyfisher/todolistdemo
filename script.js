let tasks = []; //Empty array to hold tasks

document.getElementById('addTaskBtn').addEventListener('click', function() {
    //Get the value from input field
    let taskInput = document.getElementById('taskInput').value;
    //check if input is empty
    if(taskInput){
    //Add task to task array
        tasks.push(taskInput);
    //clear input field
        document.getElementById('taskInput').value = '';
    //update task list display
    displayTasks();
    }
})

function displayTasks(){
    //select task list element
    let taskList = document.getElementById('taskList');
    //clear existing list
    taskList.innerHTML = '';
    //loop through each task in tasks array and create list item for each
    tasks.forEach((task, index) => {
        //create <li> element for each task in the array
        let li = document.createElement('li');

        //add styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )
         //set innerHTML of the LI with a task and remove button
         li.innerHTML = `${task} <button class="btn btn-success btn-sm" onclick="removeTask(${index})">✓</button>`;
         //append the new task list to the HTML
            taskList.appendChild(li);
    })

    
}