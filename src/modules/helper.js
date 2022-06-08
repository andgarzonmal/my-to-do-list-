export const updateLocalStorage = (arr) => {
  localStorage.setItem('todoTasks', JSON.stringify(arr));
}

export const updateIndex = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
}