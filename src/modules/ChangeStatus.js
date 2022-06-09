import { getFromLocalStorage } from './add.js';
import { updateLocalStorage } from './helper.js';

const changeStatus = (e) => {
  if (e.target.classList.contains('check')) {
    const arrOfTasks = getFromLocalStorage();
    for (let i = 0; i < arrOfTasks.length; i += 1) {
      const allbox = Array.from(document.querySelectorAll('.check'));
      if (allbox[i].checked && arrOfTasks[i].completed === false) {
        arrOfTasks[i].completed = true;
        updateLocalStorage(arrOfTasks);
      } else if (allbox[i].checked === false) {
        arrOfTasks[i].completed = false;
        updateLocalStorage(arrOfTasks);
      }
    }
  }
};

export default changeStatus;