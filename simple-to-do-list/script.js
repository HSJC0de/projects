const toDoList = [];
const inputElement = document.querySelector('.input-form');
const tasksElement = document.querySelector('.task-display');

function addItem(){
  const value = inputElement.value;

  toDoList.push(value);
  displayTasks()

  inputElement.value = '';
}

function displayTasks(){
  tasksElement.innerHTML = 'Tasks: '
  for (let i = 0; i < toDoList.length; i++){
    tasksElement.innerHTML += `<p class="task-${i}">${toDoList[i]}</p><button class="task-${i}">Remove</button>`
  }
}
