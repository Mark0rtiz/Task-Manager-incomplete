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

  displayTask(newTask);
}

function displayTask(newTask) {
  let syntax = `<div class = "task"> 
  <h4>${newTask.title} ${newTask.importance}</h4>
  <p>${newTask.description}</p>
  <div>${newTask.dueDate}</div>
  <div>${newTask.location}</div>
  <div><h5>${newTask.status}</h5></div>
  </div>`;

  $("#pendingTasks").append(syntax);
}

function init() {
  console.log("Task Manager page!");
  //assign events
  $("#iImportant").click(toggleImportant);
  $("#btnSave").click(saveTask);

  //load intitial data
}

window.onload = init;

//http verbs and status codes look up**
