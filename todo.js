let myInput = document.getElementById("inputText");
let submitBtn = document.getElementById("submitBtn");
let tasksDiv = document.getElementsByClassName("tasks")[0];
 

let tasksArr = [];

getDataFromLocalStorage()

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
    addDataToLocalStorage(tasksArr)
}

// function to add tasks into the page

function createDivsToTasks(arr) {
    tasksDiv.innerText = "" ;
arr.forEach(task => {
    // tasksDiv.innerHTML+=`<h1>${task.title}</h1>`
    // tasksDiv.appendChild(document.createTextNode(task.title))
    let divOfTask = document.createElement("div");
    divOfTask.className="taskDiv";
    let textDiv = document.createElement("div");
    textDiv.innerText = `${task.title}`
    textDiv.className = "textDiv col-9";
    // divOfTask.appendChild(document.createTextNode(task.title));
    divOfTask.appendChild(textDiv);
    let delBtn = document.createElement("button");
    delBtn.className = "delBtn btn btn-danger btn-sm col-1.5";
    delBtn.appendChild(document.createTextNode("Delete"));
    divOfTask.appendChild(delBtn);
    tasksDiv.appendChild(divOfTask);

    delBtn.onclick = function (e) {

        let newArr = tasksArr.filter(()=>{

        })
    }

});
}

// function to add data to local storage
 
function addDataToLocalStorage(arrData) {
window.localStorage.setItem("tasks", JSON.stringify(arrData))

}

// get data from lacal storage and push it into tasksArr

function getDataFromLocalStorage() {
    let arrOfTasks = window.localStorage.getItem("tasks");
    if (arrOfTasks) {
        let tasks = JSON.parse(arrOfTasks);
        createDivsToTasks(tasks);
        tasksArr = tasks;
    } 
}

