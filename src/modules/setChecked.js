import { getFromLocalStorage } from "./add.js";

const setChecked = () => {
  let arrOfTasks = getFromLocalStorage()
  for (let i = 0; i < arrOfTasks.length; i += 1) {
    const currenttsk = document.querySelectorAll('.check');
    if (arrOfTasks[i].completed === true) {
      currenttsk[i].checked = true;
    }
  }
};

export default setChecked;
