const inputForm = document.querySelector('.input-form');

export const tasksHtml = ({ index, description }) => `
<li class="list draggable" id="${index}" draggable="true" data-id="ee" >
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

export const addTask = (arr) => {
  if (inputForm.value.trim() === '') {
    return;
  }

  if (arr.some((task) => task.description === inputForm.value)) {
    alert('task already added');
    return;
  }

  const task = {
    index: arr.length + 1,
    description: inputForm.value,
    completed: false,
  };

  arr.push(task);
  inputForm.value = '';
  inputForm.focus();
};

export const createTasks = (todoTasks, allTasks) => {
  allTasks.innerHTML = '';

  for (let i = 0; i < todoTasks.length; i += 1) {
    todoTasks[i].index = i + 1;
  }

  todoTasks.forEach((task) => {
    allTasks.insertAdjacentHTML('beforeend', tasksHtml(task));
  });

  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
};


export const getFromLocalStorage = () => {
  const mytasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
  return mytasks;
}