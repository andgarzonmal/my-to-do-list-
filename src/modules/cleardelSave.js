import { getFromLocalStorage } from './add.js';
import { updateLocalStorage, updateIndex } from './helper.js';

export const cleardelete = (e) => {
  const dota = document.querySelectorAll('.deletedot');
  const toDelete = document.querySelectorAll('.delete');
  if (e.target.classList.contains('deletedot') || e.target.classList.contains('delete')) {
    return;
  } dota.forEach((dot) => {
    dot.classList.remove('deletedot');
    dot.classList.add('dots');
  });
  toDelete.forEach((element) => { element.style.display = 'none'; });
};

export const saveChanges = (e) => {
  if (e.target.classList.contains('input-list')) {
    const arrOfTasks = getFromLocalStorage();
    const inputList = Array.from(document.querySelectorAll('.input-list'));
    arrOfTasks[inputList.indexOf(e.target)].description = e.target.value;
    updateLocalStorage(arrOfTasks);
  }
};

export const del = (e) => {
  if (e.target.classList.contains('delete')) {
    let arrOfTasks = getFromLocalStorage();
    const deletebtns = Array.from(document.querySelectorAll('.delete'));
    arrOfTasks = arrOfTasks.filter((x) => x.index !== deletebtns.indexOf(e.target) + 1);
    e.target.parentNode.remove();
    updateIndex(arrOfTasks);
    updateLocalStorage(arrOfTasks);
  }
};

export const clearAll = (e) => {
  if (e.target.classList.contains('clear')) {
    let arrOfTasks = getFromLocalStorage();
    const allToDelete = document.querySelectorAll('.list');
    allToDelete.forEach((toDelete) => {
      if (toDelete.childNodes[1].checked) {
        toDelete.remove();
        arrOfTasks = arrOfTasks.filter((x) => x.completed !== true);
      }
      updateIndex(arrOfTasks);
      updateLocalStorage(arrOfTasks);
    });
  }
};
