export const cleardelete = (e) =>{
    const dota = document.querySelectorAll('.deletedot')
    const toDelete = document.querySelectorAll('.delete')
    if(e.target.classList.contains('deletedot') || e.target.classList.contains('delete')){
      return
    } else 
    dota.forEach(dot => {
      dot.classList.remove('deletedot');
      dot.classList.add('dots')
    })
    toDelete.forEach(element =>  element.style.display="none")
  }

 export const saveChanges = (e,todoTasks) => {
    if(e.target.classList.contains('input-list')){
      const inputList = Array.from(document.querySelectorAll('.input-list'))
      todoTasks[inputList.indexOf(e.target)].description = e.target.value
      localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
    }
  } 