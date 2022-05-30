import './style.css';
import tasksHtml from './modules/innerhtml.js';

const form = document.querySelector(".form");
const inputForm = document.querySelector(".input-form");
const allTasks = document.querySelector(".tasks");

let todoTasks = []; 

// const tasksHtml = ({index, description}) => `
// <li class="draggable list" id="${index}" draggable="true">
//     <input type="checkbox" name="task" >
//     <input type="text"  class="input-list" value="${description}">
//     <div>
//         <i class="material-icons dots">
//             more_vert
//         </i>
//         <i class="material-icons delete">
//             delete
//         </i>
//     </div>
// </li>
// `

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  addTask()
  createTasks()
})

const addTask = e => {
  if(inputForm.value.trim() === '') {
    return
  }

  const task = {
    index: Date.now(),
    description: inputForm.value,
    completed: false
  }

  todoTasks.push(task);
  inputForm.value='';
  inputForm.focus();
}

const createTasks = () => {
  allTasks.innerHTML ='';
  todoTasks.forEach(task => {
    allTasks.insertAdjacentHTML("beforeend",tasksHtml(task))
  })  
}