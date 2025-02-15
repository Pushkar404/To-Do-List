let input = document.getElementById("inp");  // Fix variable name (singular "input" makes more sense)
let text = document.querySelector(".text");  // Container for task list

function Add() {
    if (input.value.trim() === "") {  // Trim to avoid spaces-only input
        alert("Please enter a task");
    } else {
        let newEle = document.createElement("li");  // Use <li> instead of <ul>
        newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;

        text.appendChild(newEle);
        input.value = ""; // Clear input field after adding task

        // Add event listener for remove functionality
        newEle.querySelector("i").addEventListener("click", function () {
            newEle.remove();
        });
    }
}
