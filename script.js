

let ToDo = JSON.parse(localStorage.getItem("ToDo")) || [];
const ToDoInput = document.getElementById("ToDoInput");
const ToDoList = document.getElementById("ToDoList");
const ToDoCount = document.getElementById("ToDoCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton");



//** FUNCTION **//
document.addEventListener("DOMContentLoaded",function () {
    addButton.addEventListener("click",addTask);
    ToDoInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTasks();
        }
    });
    deleteButton.addEventListener("click", deleteAllTasks);
    displayTasks();
});



function addTask() {
    const newTask = ToDoInput.value.trim();
    if (newTask !== "") {
        ToDo.push({
            text: newTask,
            disabled: false, 
        });
        saveToLocalStorage();
        ToDoInput.value = "";
        displayTasks();
    }
}


function deleteAllTasks() {
    console.log();


}

function displayTasks() {
    ToDoList.innerHTML = "";
    ToDo.forEach((item, index) => {
    const p = document.createElement("p");
    p.innerHTML = `
    <div class="ToDo-container">
    <input type="checkbox" class="ToDo-checkbox" 
    id="input-${index}"${
        item.disabled ? "checked" : "" 
    }>

    <p id="ToDo-${index}" class"${
        item.disabled ?
    "disabled" : ""
    }" onclick="editTasks(${index})"> ${item.text}</p>
    </div>
    `

  p.querySelector(".ToDo-checkbox").addEventListener
("change",() => {
    toggleTasks(index);
});
 ToDoList.appendChild(p);
    });
    ToDoCount.textContent = ToDo.length;
} 



function toggleTasks(index) {
    ToDo[index].disabled = !ToDo[index].disabled;
    saveToLocalStorage();
    displayTasks();
}

function deleteAllTasks() {
    ToDo = [];
    saveToLocalStorage();
    displayTasks();

}

function saveToLocalStorage() {
    localStorage.setItem("ToDo",JSON.stringify(ToDo));
}