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

export const saveChanges = (e, todoTasks) => {
  if (e.target.classList.contains('input-list')) {
    const inputList = Array.from(document.querySelectorAll('.input-list'));
    todoTasks[inputList.indexOf(e.target)].description = e.target.value;
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
  }
};

// export const del = (e) => {
//   console.log(this)
//   if (e.target.classList.contains('delete')) {
//     const deletebtns = Array.from(document.querySelectorAll('.delete'));
//     todoTasks = todoTasks.filter((x) => x.index !== deletebtns.indexOf(e.target) + 1);
//     e.target.parentNode.remove();
//     for (let i = 0; i < todoTasks.length; i += 1) {
//       todoTasks[i].index = i + 1;
//     }
//     localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
//   }
// };