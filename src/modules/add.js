import {updateLocalStorage, updateIndex} from "./helper.js";

export const getFromLocalStorage = () => {
  const mytasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
  return mytasks;
};

export const tasksHtml = ({ index, description }) => `
<li class="list draggable dflex" id="${index}" draggable="true" data-id="ee" >
  <input type="checkbox" name="task" class="check" data-asign="${index}" >
  <input type="text" class="input-list" value="${description}">
  <i class="material-icons dots">
    more_vert
  </i>
  <i class="material-icons delete" >
    delete
  </i> 
</li>
`;

export const addTask = (inputForm) => {
  if (inputForm.value === '') {
    return;
  }

  const arrOfTasks = getFromLocalStorage();

  if (arrOfTasks.some((task) => task.description === inputForm.value)) {
    alert('task already added');
    return;
  }

  const task = {
    index: arrOfTasks.length + 1,
    description: inputForm.value,
    completed: false,
  };

  arrOfTasks.push(task);
  inputForm.value = '';
  inputForm.focus();
  updateLocalStorage(arrOfTasks)
};

export const createTasks = (allTasks) => {
  allTasks.innerHTML = '';
  const arrOfTasks = getFromLocalStorage();
  
  updateIndex(arrOfTasks)

  arrOfTasks.forEach((task) => {
    allTasks.insertAdjacentHTML('beforeend', tasksHtml(task));
  });
};
