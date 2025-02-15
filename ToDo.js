// Select input field and task container
let input = document.getElementById("inp");
let textContainer = document.querySelector(".text");

function Add() {
    // Trim input to prevent adding empty spaces as tasks
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
    } else {
        // Create a new task element
        let newTask = document.createElement("li");
        newTask.innerHTML = `${task} <i class="fa-solid fa-trash"></i>`;

        // Append task to the text container
        textContainer.appendChild(newTask);
        input.value = ""; // Clear input field after adding task

        // Add event listener for remove functionality
        newTask.querySelector("i").addEventListener("click", function () {
            newTask.remove();
        });
    }
}
