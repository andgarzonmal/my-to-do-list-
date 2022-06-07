const inputForm = document.querySelector('.input-form');

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

export const addTask = () => {
  if (inputForm.value.trim() === '') {
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
  localStorage.setItem('todoTasks', JSON.stringify(arrOfTasks));
};

export const createTasks = (allTasks) => {
  allTasks.innerHTML = '';
  const arrOfTasks = getFromLocalStorage();
  console.log(arrOfTasks);
  for (let i = 0; i < arrOfTasks.length; i += 1) {
    arrOfTasks[i].index = i + 1;
  }

  arrOfTasks.forEach((task) => {
    allTasks.insertAdjacentHTML('beforeend', tasksHtml(task));
  });
};
