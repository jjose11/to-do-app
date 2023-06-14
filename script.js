const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
  if(inputBox.value === '') {
    alert("You must write something!")
  }
  else {


    let li = document.createElement("li");
    // creates a list element for the task
    li.innerHTML = inputBox.value;
    //creates a list element using the value inputed
    listContainer.appendChild(li);
    //adds list element to the listContainer

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    let today = new Date();
    let date = (today.getMonth() + 1) + '-'+ today.getDate() + '-' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = "Date posted: " + date + ' ' + time;

    let list = document.getElementById('datePosted');
    let listItem = document.createElement('p');
    listItem.textContent = dateTime;
    li.appendChild(listItem);

    console.log(listItem)

    saveData();
  
  }

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


