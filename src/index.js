import './style.css';
import changeStatus from './modules/ChangeStatus.js';
import setChecked from './modules/setChecked.js';
import {
  tasksHtml, addTask, createTasks, getFromLocalStorage,
} from './modules/add.js';
import changeIcon from './modules/changeIcon.js';
import { cleardelete, saveChanges, del, clearAll} from './modules/cleardelSave.js';
import {
  dragStart, dragend, dragOver, arrFromLocalStorage,
} from './modules/drag.js';

const dragContainer = document.querySelector('.tasks');
const form = document.querySelector('.form');
const allTasks = document.querySelector('.tasks');
const savedLists = JSON.parse(localStorage.getItem('todoTasks'));
let todoTasks = getFromLocalStorage();

// const del = (e) => {
//   if (e.target.classList.contains('delete')) {
//     let arrOfTasks = getFromLocalStorage()
//     const deletebtns = Array.from(document.querySelectorAll('.delete'));
//     console.log(deletebtns.indexOf(e.target) + 1)
//     arrOfTasks = arrOfTasks.filter((x) => x.index !== deletebtns.indexOf(e.target) + 1);
//     e.target.parentNode.remove();
//     for (let i = 0; i < arrOfTasks.length; i += 1) {
//       arrOfTasks[i].index = i + 1;
//     }
//     localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));
//   }
// };

// const clearAll = (e) => {
//   if (e.target.classList.contains('clear')) {
//     let arrOfTasks = getFromLocalStorage()
//     const allToDelete = document.querySelectorAll('.list');
//     allToDelete.forEach((toDelete) => {
//       if (toDelete.childNodes[1].checked) {
//         toDelete.remove();
//         arrOfTasks = arrOfTasks.filter((x) => x.completed !== true);
//       }
//       for (let i = 0; i < arrOfTasks.length; i += 1) {
//         arrOfTasks[i].index = i + 1;
//       }
//       localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));
//     });
//   }
// };

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
  createTasks(allTasks);
  setChecked();
  changeIcon();
});

allTasks.addEventListener('change', (e) => {
  changeStatus(e);
  setChecked();
});

allTasks.addEventListener('input', (e) => {
  saveChanges(e);
});

document.addEventListener('click', (e) => {
  cleardelete(e);
  clearAll(e);
  del(e);
});

document.addEventListener('dragstart', (e) => {
  dragStart(e);
});

document.addEventListener('dragend', (e) => {
  dragend(e);
  arrFromLocalStorage();
});

dragContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  dragOver(e);
});

if (savedLists !== null) {
  todoTasks = savedLists;
  todoTasks.forEach((item) => {
    allTasks.insertAdjacentHTML('beforeend', tasksHtml(item));
  });
  setChecked();
  changeIcon();
}
