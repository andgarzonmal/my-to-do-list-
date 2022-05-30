import './style.css';
import tasksHtml from './modules/innerhtml.js';

const form = document.querySelector('.form');
const inputForm = document.querySelector('.input-form');
const allTasks = document.querySelector('.tasks');

const todoTasks = [{
  index: 0,
  description: 'Task 1',
  completed: false,
},
{
  index: 1,
  description: 'Task 2',
  completed: false,
},];

console.log(todoTasks)
document.addEventListener('DOMContentLoaded', ()=> {
  addTask();
  createTasks();
})

const addTask = () => {
  if (inputForm.value.trim() === '') {
    return;
  }

  const task = {
    index: todoTasks.length,
    description: inputForm.value,
    completed: false,
  };

  todoTasks.push(task);
  console.log(todoTasks)
  inputForm.value = '';
  inputForm.focus();
};

const createTasks = () => {
  allTasks.innerHTML = '';
  todoTasks.forEach((task) => {
    allTasks.insertAdjacentHTML('beforeend', tasksHtml(task));
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
  createTasks();
});