import './style.css';
import changeStatus from './modules/ChangeStatus.js';
import setChecked from './modules/setChecked.js';
import { tasksHtml, addTask, createTasks } from './modules/add.js';
import changeIcon from './modules/changeIcon.js';
import { cleardelete, saveChanges } from './modules/cleardelSave.js';
import { dragStart, dragend, dragOver,} from './modules/drag.js';

const dragContainer = document.querySelector('.tasks') 
const form = document.querySelector('.form');
const allTasks = document.querySelector('.tasks');
const savedLists = JSON.parse(localStorage.getItem('todoTasks'));
let todoTasks = [];
const del = (e) => {
  if (e.target.classList.contains('delete')) {
    const deletebtns = Array.from(document.querySelectorAll('.delete'));
    todoTasks = todoTasks.filter((x) => x.index !== deletebtns.indexOf(e.target) + 1);
    e.target.parentNode.remove();
    for (let i = 0; i < todoTasks.length; i += 1) {
      todoTasks[i].index = i + 1;
    }
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
  }
};

const clearAll = (e) => {
  console.log(this)
  if (e.target.classList.contains('clear')) {
    const allToDelete = document.querySelectorAll('.list');
    allToDelete.forEach((toDelete) => {
      if (toDelete.childNodes[1].checked) {
        toDelete.remove();
        todoTasks = todoTasks.filter((x) => x.completed !== true);
        console.log(this)
      }
      for (let i = 0; i < todoTasks.length; i += 1) {
        todoTasks[i].index = i + 1;
      }
      localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
    });
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(todoTasks);
  createTasks(todoTasks, allTasks);
  changeIcon(todoTasks);
});

allTasks.addEventListener('change', (e) => {
  changeStatus(e, todoTasks);
  setChecked(todoTasks);
});

allTasks.addEventListener('input', (e) => {
  saveChanges(e, todoTasks);
});

document.addEventListener('click', (e) => {
  cleardelete(e);
  clearAll(e, todoTasks);
  del(e);
});


document.addEventListener('dragstart', (e) =>{
  dragStart(e);
})

document.addEventListener('dragend', (e) =>{
  dragend(e);
})

dragContainer.addEventListener('dragover', (e)=> {
  e.preventDefault();
  dragOver(e);
})

if (savedLists !== null) {
  todoTasks = savedLists;
  todoTasks.forEach((item) => {
    allTasks.insertAdjacentHTML('beforeend', tasksHtml(item));
  });
  setChecked(todoTasks);
  changeIcon(todoTasks);
}
