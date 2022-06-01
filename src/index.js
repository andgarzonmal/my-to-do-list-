import './style.css';
import changeStatus from './modules/ChangeStatus.js';
import setChecked from './modules/setChecked.js';

const form = document.querySelector('.form');
const inputForm = document.querySelector('.input-form');
const allTasks = document.querySelector('.tasks');
const savedLists = JSON.parse(localStorage.getItem('todoTasks'));
let todoTasks = [];

const tasksHtml = ({ index, description }) => `
<li class="list" id="${index}" draggable="true" data-id="ee" >
    <input type="checkbox" name="task" class="check" data-asign="${index}" >
    <input type="text"  class="input-list" value="${description}">
    <i class="material-icons dots">
        more_vert
    </i>
    <i class="material-icons delete" >
        delete
    </i> 
</li>
`;

// ✔️FUNCION✔️
const addTask = () => {
  if (inputForm.value.trim() === '') {
    return;
  }

  if(todoTasks.some(task => task.description === inputForm.value )){
    alert('task already added');
    return 
  }

  const task = {
    index: todoTasks.length,
    description: inputForm.value,
    completed: false,
  };

  todoTasks.push(task);
  inputForm.value = '';
  inputForm.focus();
};

// ✔️FUNCION✔️
const createTasks = () => {
  allTasks.innerHTML = '';
  
  for(let i=0; i<todoTasks.length; i++){
    todoTasks[i].index=i
  }
  
  todoTasks.forEach((task) => {
    allTasks.insertAdjacentHTML('beforeend', tasksHtml(task));
  });

  localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
};

// ✔️FUNCION✔️
const changeIcon = (arr) => {
  const allDots=document.querySelectorAll('.dots')
  const btnDelete=document.querySelectorAll('.delete')
  for( let i=0; i<arr.length; i++){
    allDots[i].addEventListener('click', ()=> {
      allDots[i].classList.remove('dots')
      allDots[i].classList.add('deletedot')
      btnDelete[i].style.display='unset'  
    }) 
  }
}

// ✔️FUNCION✔️
const cleardelete = (e) =>{
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

// ✔️FUNCION✔️

const del = (e) => {
  if(e.target.classList.contains('delete')){
    let deletebtns = Array.from(document.querySelectorAll('.delete'))
    console.log(deletebtns.indexOf(e.target))
    todoTasks=todoTasks.filter(x=>x.index !== deletebtns.indexOf(e.target));  
    e.target.parentNode.remove()
    for(let i=0; i<todoTasks.length; i++){
      todoTasks[i].index=i
    }
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks))
  }
}


// ✔️FUNCION✔️
const clearAll = (e) => {
  if(e.target.classList.contains('clear')){
    const allToDelete = document.querySelectorAll('.list')
    allToDelete.forEach(toDelete => {
      if(toDelete.childNodes[1].checked){
        toDelete.remove()
        todoTasks=todoTasks.filter(x=>x.completed !== true)
      }
      for(let i=0; i<todoTasks.length; i++){
        todoTasks[i].index=i
      }
      localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
    })  
  }
}

// ✔️FUNCION✔️

const saveChanges = (e) => {
  if(e.target.classList.contains('input-list')){
    const inputList = Array.from(document.querySelectorAll('.input-list'))
    todoTasks[inputList.indexOf(e.target)].description = e.target.value
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
  }
} 

//////////////////////////////////////////////////////////////////////////////////////////

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
  createTasks();
  changeIcon(todoTasks)
});

allTasks.addEventListener('change', (e) => {
  changeStatus(e, todoTasks);
  setChecked(todoTasks);
});

allTasks.addEventListener('input',(e) => {
  saveChanges(e)
})


document.addEventListener("click", (e) => {
  cleardelete(e)
  clearAll(e)
  del(e)
})


if (savedLists !== null) {
  todoTasks = savedLists;
  todoTasks.forEach((item) => {
    allTasks.insertAdjacentHTML('beforeend', tasksHtml(item));
  });
  setChecked(todoTasks);
  changeIcon(todoTasks);
}
