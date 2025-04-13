const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === "") {
        alert("You must enter something");
    } else {
        const li = document.createElement("li");
        li.className = "task-item";

        //Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";

        //Creating text element
        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = taskText;
        
        //Delete button
        const deletebtn = document.createElement("span");
        deletebtn.innerHTML = "&times;";
        deletebtn.classList.add("delete-btn");
        deletebtn.onclick = () => li.remove();
        deletebtn.style.marginLeft = "auto";
        deletebtn.style.marginRight = "10px";
        deletebtn.style.cursor = "pointer";

        //Adding the task into the list of tasks
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deletebtn);
        taskList.appendChild(li);

        // checkbox.addEventListener("change", function() {
        //     if(checkbox.checked) {
        //         li.remove();
        //     }
        // });

        taskInput.value = ""; //Clearing Input
    }
}

taskInput.addEventListener("keydown", function(event) {
    if(event.key == 'Enter') {  
        addTask();
    }
});
