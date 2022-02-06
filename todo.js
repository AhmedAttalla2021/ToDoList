let myInput = document.getElementById("inputText");
let submitBtn = document.getElementById("submitBtn");
let tasksDiv = document.getElementsByClassName("tasks")[0];
 

let tasksArr = [];


getDataFromLocalStorage()

// handle add Btn click
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
    addDataToLocalStorage(tasksArr)
    createDivsToTasks(tasksArr)
    
}

// handle delete Btn and toggle completed property
tasksDiv.onclick = function (e) {

    if(e.target.classList.contains("delBtn")) {
        deleteTask(e.target.parentElement.getAttribute("data-id"))
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("textDiv")) {
        toggleCompleted(e.target.parentElement.getAttribute("data-id"))
        e.target.parentElement.classList.contains("done")?
        e.target.parentElement.classList.remove("done"):
        e.target.parentElement.classList.add("done");
    
    }
    
}

// function to add tasks into the page

function createDivsToTasks(arr) {
    tasksDiv.innerText = "" ;
arr.forEach(task => {
    // tasksDiv.innerHTML+=`<h1>${task.title}</h1>`
    // tasksDiv.appendChild(document.createTextNode(task.title))
    let divOfTask = document.createElement("div");
    divOfTask.className="taskDiv";
    divOfTask.setAttribute("data-id", task.id );
    let textDiv = document.createElement("div");
    textDiv.innerText = `${task.title}`
    textDiv.className = "textDiv col-9";
    // divOfTask.appendChild(document.createTextNode(task.title));
    divOfTask.appendChild(textDiv);
    let delBtn = document.createElement("button");
    delBtn.className = "delBtn btn btn-danger btn-sm col-2";
    delBtn.appendChild(document.createTextNode("Delete"));
    divOfTask.appendChild(delBtn);
    tasksDiv.appendChild(divOfTask);

    

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

// function to delete task

function deleteTask(deletedTaskId) {
 tasksArr = tasksArr.filter( task => task.id != deletedTaskId )
 
addDataToLocalStorage(tasksArr)
 
}


// function for toggling completed property

function toggleCompleted(id) {

for(i=0; i<tasksArr.length; i++ ) {
    if(tasksArr[i].id === id) {
        tasksArr[i].completed == false ? tasksArr[i].completed == true : tasksArr[i].completed == false ;
        
    }
    
}

} 
