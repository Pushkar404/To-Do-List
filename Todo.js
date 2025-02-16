let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

inputs.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        Add();
    }
});

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
        let checkbox = newEle.querySelector(".task-checkbox");
        let taskText = newEle.querySelector(".task-text");
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                taskText.classList.add("completed"); // Mark as completed
            } else {
                taskText.classList.remove("completed"); // Mark as incomplete
            }
        });
    }
}

document.getElementById("addButton").addEventListener("click",Add);
