const changeStatus = (e, arr) => {
  if (e.target.classList.contains('check')) {
    for (let i = 0; i < arr.length; i += 1) {
      const allbox = Array.from(document.querySelectorAll('.check'));
      if (allbox[i].checked && arr[i].completed === false) {
        arr[i].completed = true;
        localStorage.setItem('todoTasks', JSON.stringify(arr));
      } else if (allbox[i].checked === false) {
        arr[i].completed = false;
        localStorage.setItem('todoTasks', JSON.stringify(arr));
      }
    }
  }
};

export default changeStatus;