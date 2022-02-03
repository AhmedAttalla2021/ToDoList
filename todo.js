let myInput = document.getElementById("inputText");
let submitBtn = document.getElementById("submitBtn");
let tasksDiv = document.getElementsByClassName("tasks")[0];

let tasksArr = [];

submitBtn.onclick = function() {

    if(myInput.value !== "") {

        let task = {
            id: Date.now(),
            title: myInput.value,
            completed: false
        }

        tasksArr.push(task);
        myInput.value = "";
    }
    createDivsToTasks(tasksArr)
}

function createDivsToTasks(arr) {
    tasksDiv.innerText = "" ;
arr.forEach(task => {
    // tasksDiv.innerHTML+=`<h1>${task.title}</h1>`
    // tasksDiv.appendChild(document.createTextNode(task.title))
    let divOfTask = document.createElement("div");
    divOfTask.className="taskDiv";
    divOfTask.appendChild(document.createTextNode(task.title));
    let delSpan = document.createElement("span");
    delSpan.className = "span";
    delSpan.appendChild(document.createTextNode("Delete"));
    divOfTask.appendChild(delSpan);
    tasksDiv.appendChild(divOfTask);

});
}