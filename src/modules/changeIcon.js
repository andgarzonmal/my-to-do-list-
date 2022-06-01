const changeIcon = (todoTasks) => {
  const allDots = document.querySelectorAll('.dots');
  const btnDelete = document.querySelectorAll('.delete');
  for (let i = 0; i < todoTasks.length; i += 1) {
    allDots[i].addEventListener('click', () => {
      allDots[i].classList.remove('dots');
      allDots[i].classList.add('deletedot');
      btnDelete[i].style.display = 'unset';
    });
  }
};

export default changeIcon;