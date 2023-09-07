/*
Add functionality to add button, remove button, and input form

localStorage, JSON, arrays, loops, DOM

variables: 
toDoList --> array
inputElement --> object
taskElement --> object

functions:
saveTasks()
addTask()
removeTask()
renderTasks()

eventListeners

each task should have a max of 32character width
*/

const toDoList = JSON.parse(localStorage.getItem('list')) || [];
const inputElement = document.querySelector('.input-element');
const displayTaskElement = document.querySelector('.container-item');

function convertItemToHTML(index){
  const stringTask = toDoList[index];
  const taskItem = 
  `
  <div class="item">
    <button class="button-remove" onclick="removeTask(${index});">Remove</button>
    <div class="container-text">
      ${limitChar(stringTask)}
    </div>
  </div>
  `;
  console.log(taskItem);
  return taskItem;
}

function limitChar(string){
  let HTML = '';
  const rows = Math.ceil(string.length / 32);
  for (let i = 0; i < rows; i++){
    HTML += `<p class="item-text">${string.slice(i * 32, i * 32 + 32)}</p>`;
  }
  return HTML;
}

function saveTasks(){
  localStorage.setItem('list', JSON.stringify(toDoList));
}

function addTask(){
  const value = inputElement.value;
  toDoList.push(value);
  console.log(toDoList);
  inputElement.value = '';
  renderTasks();
}

function removeTask(i){
  toDoList.splice(i, 1);
  renderTasks();
}

function renderTasks(){
  displayTaskElement.innerHTML = '';
  for (let i = 0; i < toDoList.length; i++){
    displayTaskElement.innerHTML += convertItemToHTML(i);
  } 
  saveTasks();
}

window.addEventListener('load', function(){
  renderTasks();
})