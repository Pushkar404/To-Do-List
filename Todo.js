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
    }
}

document.getElementById("addButton").addEventListener("click",Add);