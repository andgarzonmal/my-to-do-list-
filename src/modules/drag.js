const toDrag = document.querySelectorAll('.draggable')
const dragCont = document.querySelector('.tasks'); 

export const dragStart = (e) => {
  if(e.target.classList.contains('draggable')){
    e.target.classList.remove('draggable')
    e.target.classList.add('dragging')
    e.target.childNodes[3].style.backgroundColor = "#c6c8cb"
  }
}

export const dragend = (e) => {
  if(e.target.classList.contains('dragging')){
    e.target.classList.remove('dragging')
    e.target.classList.add('draggable')
    e.target.childNodes[3].style.backgroundColor = "white"
  }
}

export const dragOver = (e) => {
  const draggable = document.querySelector('.dragging')
  const afterElement = dragAfterElement(dragCont, e.clientY)
  console.log(afterElement)
  if (afterElement === null){
    dragCont.appendChild(draggable)
  } else {
    dragCont.insertBefore(draggable, afterElement)
  }
  
}

const dragAfterElement = (dragCont, y) => {
  const draggableElements = [...dragCont.querySelectorAll('.draggable:not(.dragging)')]
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y -box.top - box.height / 2
    if(offset < 0 && offset > closest.offset) {
      return {offset: offset, element: child}
    } else {
      return closest
    }
  }, {offset: Number.NEGATIVE_INFINITY}).element
}