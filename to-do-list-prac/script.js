const toDoList = JSON.parse(localStorage.getItem('list')) || [];
const inputElement = document.querySelector('.to-do-list');
const taskDisplayElement = document.querySelector('.task-container');

function saveListToLS(){
  localStorage.setItem('list', JSON.stringify(toDoList));
}

/*
sets task = to whatever is in the input form
only adds tasks to the list if they are not blank
renders the task
*/
function addTask(){
  const task = inputElement.value;
  if (task !== ''){
    toDoList.push(task);
  }
  console.log(toDoList)
  inputElement.value = '';
  renderTasks();
}

function removeTask(i){
  toDoList.splice(i, 1);
  renderTasks();
}

/*
builds the html before updating it
loops through the array and adds an html element that displays the task and a remove button
everytime renderTasks is called, the i in the removeTask function is rewritten
  ex. if object2 was removed and object 3 exists, object3 becomes object2
*/
function renderTasks(){
  let taskInnerHTML = 'Tasks: ';
  for (let i = 0; i < toDoList.length; i++){
    taskInnerHTML += 
    `<div class="item-container"> 
      <button onclick="removeTask(${i});" class="remove-button">Remove</button>
      <p class="item">${toDoList[i]}</p>
    </div>`;
  }
  taskDisplayElement.innerHTML = taskInnerHTML;
  saveListToLS();
}


document.querySelector('.to-do-list').addEventListener('keypress', function(event){
  if (event.key === 'Enter'){
    addTask();
  }
});

window.addEventListener('load', renderTasks);

