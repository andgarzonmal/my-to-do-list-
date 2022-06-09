import { updateLocalStorage } from './helper.js';

const dragCont = document.querySelector('.tasks');

export const dragStart = (e) => {
  if (e.target.classList.contains('draggable')) {
    e.target.classList.remove('draggable');
    e.target.classList.add('dragging');
    e.target.childNodes[3].style.backgroundColor = '#c6c8cb';
  }
};

export const dragend = (e) => {
  if (e.target.classList.contains('dragging')) {
    e.target.classList.remove('dragging');
    e.target.classList.add('draggable');
    e.target.childNodes[3].style.backgroundColor = 'white';
  }
};

export const arrFromLocalStorage = () => {
  const addedTasks = JSON.parse(localStorage.getItem('todoTasks'));
  const lists = [...document.querySelectorAll('.list')];
  const arrayOfInputs = [];
  const arrayOfBooleans = [];
  lists.forEach((element) => {
    arrayOfInputs.push(element.childNodes[3].value);
    arrayOfBooleans.push(element.childNodes[1].checked);
  });
  for (let i = 0; i < addedTasks.length; i += 1) {
    addedTasks[i].description = arrayOfInputs[i];
    addedTasks[i].completed = arrayOfBooleans[i];
  }
  updateLocalStorage(addedTasks);
};

const dragAfterElement = (dragCont, y) => {
  const draggableElements = [...dragCont.querySelectorAll('.draggable:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
};

export const dragOver = (e) => {
  const draggable = document.querySelector('.dragging');
  const afterElement = dragAfterElement(dragCont, e.clientY);
  if (afterElement === null) {
    dragCont.appendChild(draggable);
  } else {
    dragCont.insertBefore(draggable, afterElement);
  }
};
