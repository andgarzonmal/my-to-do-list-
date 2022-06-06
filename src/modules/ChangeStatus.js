import { getFromLocalStorage } from './add.js';

const changeStatus = (e) => {
  if (e.target.classList.contains('check')) {
    const arrOfTasks = getFromLocalStorage();
    for (let i = 0; i < arrOfTasks.length; i += 1) {
      const allbox = Array.from(document.querySelectorAll('.check'));
      if (allbox[i].checked && arrOfTasks[i].completed === false) {
        arrOfTasks[i].completed = true;
        localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));
      } else if (allbox[i].checked === false) {
        arrOfTasks[i].completed = false;
        localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));
      }
    }
  }
};

export default changeStatus;