
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");
const errorMessage = document.getElementById("error-message");
const totalCount = document.getElementById("total-count");
const completedCount = document.getElementById("completed-count");

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        errorMessage.textContent = "Please enter a task.";
        taskInput.focus();
        return;
    }

    errorMessage.textContent = "";
    addTask(taskText);

    taskInput.value = "";
    taskInput.focus();
});

function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", "Mark task as completed");

    const taskName = document.createElement("span");
    taskName.className = "task-text";
    taskName.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", "Delete task: " + taskText);

    checkbox.addEventListener("change", function () {
        listItem.classList.toggle("completed", checkbox.checked);
        updateCounts();
    });

    deleteButton.addEventListener("click", function () {
        listItem.remove();
        updateCounts();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    updateCounts();
}

function updateCounts() {
    const tasks = taskList.querySelectorAll(".task-item");
    const completedTasks = taskList.querySelectorAll(
        ".task-item.completed"
    );

    totalCount.textContent = tasks.length;
    completedCount.textContent = completedTasks.length;

    emptyMessage.style.display =
        tasks.length === 0 ? "block" : "none";
}
