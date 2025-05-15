document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskForm = document.getElementById("add-task-form");
    const saveTaskBtn = document.getElementById("save-task-btn");
    const cancelTaskBtn = document.getElementById("cancel-task-btn");
    const taskList = document.getElementById("task-list");

    const taskNameInput = document.getElementById("task-name");
    const taskDateInput = document.getElementById("task-date");
    const taskPriorityInput = document.getElementById("task-priority");

    // Show the Add Task Form
    addTaskBtn.addEventListener("click", () => {
        taskForm.classList.remove("hidden");
    });

    // Hide the Add Task Form
    cancelTaskBtn.addEventListener("click", () => {
        taskForm.classList.add("hidden");
        clearForm();
    });

    // Save the Task
    saveTaskBtn.addEventListener("click", () => {
        const taskName = taskNameInput.value.trim();
        const taskDate = taskDateInput.value.trim();
        const taskPriority = taskPriorityInput.value;

        if (taskName === "" || taskDate === "") {
            alert("Please fill in all fields.");
            return;
        }

        addTask(taskName, taskDate, taskPriority);
        taskForm.classList.add("hidden");
        clearForm();
    });

    // Add Task to the List
    function addTask(name, date, priority) {
        const taskItem = document.createElement("div");
        taskItem.className = "p-3 bg-gray-50 rounded-lg flex justify-between items-center";

        const taskDetails = document.createElement("div");
        taskDetails.innerHTML = `
            <div class="font-medium">${name}</div>
            <div class="text-xs text-gray-500">${new Date(date).toLocaleString()}</div>
        `;

        const priorityLabel = document.createElement("span");
        priorityLabel.className = `px-2 py-1 rounded-lg text-xs font-medium ${priority === "High" ? "bg-red-200 text-red-600" :
                priority === "Medium" ? "bg-yellow-200 text-yellow-600" :
                    "bg-blue-200 text-blue-600"
            }`;
        priorityLabel.textContent = priority;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "&#128465;";
        deleteBtn.className = "text-gray-600 hover:text-red-600 ml-2";
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(priorityLabel);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }

    // Clear Form Inputs
    function clearForm() {
        taskNameInput.value = "";
        taskDateInput.value = "";
        taskPriorityInput.value = "Low";
    }
});
