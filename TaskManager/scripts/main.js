let nonImportantIconClass = "fa-regular fa-star";
let importantIconClass = "fa-solid fa-star";
let isImportant = false;

function toggleImportant() {
  console.log("icon clicked");

  if (!isImportant) {
    $("#iImportant")
      .removeClass(nonImportantIconClass)
      .addClass(importantIconClass);
    isImportant = true;
  } else {
    $("#iImportant")
      .removeClass(importantIconClass)
      .addClass(nonImportantIconClass);
    isImportant = false;
  }
}

function saveTask() {
  console.log("saving task...");

  let title = $("#txtTitle").val();
  let description = $("#txtDescription").val();
  let dueDate = $("#selDueDate").val();
  let location = $("#txtTitle").val();
  let color = $("#selColor").val();
  let status = $("#selStatus").val();
  let notification = $("#chkNotification").prop("checked");

  let newTask = new Task(
    isImportant,
    title,
    dueDate,
    description,
    color,
    location,
    status,
    notification
  );
  //send task to the server
  $.ajax({
    type: "POST",
    url: "https://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(newTask),
    contentType: "application/json",
    success: function (res) {
      console.log("server says", res);
      displayTask(newTask);
    },
    error: function (errorDetails) {
      console.log("error saving tasks", errorDetails);
    },
  });
}

function displayTask(task) {
  let syntax = `<div class="task" style= "border: 2px solid #353535;">  
      <i class="fa-regular fa-star"></i>
  
      <div class="info">
        <h5>${task.title}</h5>
        <p>${task.description}</p>
      </div>
  
      <label class="location">${task.location}</label>
  
      <label class="date">${task.dueDate}</label>
  
      <label class="status">${task.status}</label>
  
    </div>`;

  $("#pendingTasks").append(syntax);
}

function testRequest() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/",
    success: function (res) {
      console.log("server says", res);
    },
    error: function (errorDetails) {
      console.log("error", errorDetails);
    },
  });
}

function fetchTasks() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/api/tasks",
    success: function (res) {
      console.log("server says", res);
      let tasks = JSON.parse(res); //array of task objects
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.name == "Mark") {
          displayTask(task);
        }
      }
    },
    error: function (details) {
      console.log("error retrieving tasks", details);
    },
  });
}

function init() {
  console.log("Task Manager page!");
  //assign events
  $("#iImportant").click(toggleImportant);
  $("#btnSave").click(saveTask);

  //load intitial data
  fetchTasks();
}

window.onload = init;

//http verbs and status codes look up**
