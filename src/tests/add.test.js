import JSDOMEnvironment, { TestEnvironment } from 'jest-environment-jsdom';
import {
    tasksHtml, addTask, createTasks, getFromLocalStorage,
  } from '../modules/add.js';

describe('Add function', ()=>{

  beforeEach(()=>{
    document.body.innerHTML = `
    <div>
      <form class="form" class="dflex">
          <input type="text" value="task1" class="input-form" autofocus>
          <button class="material-icons submit" type="submit">
            keyboard_return
          </button>
      </form>
      <ul class="tasks">
      </ul>
    </div>`

    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
  
    
  })
  
  test('Adds a task to local storage', ()=>{
    const inputForm = document.querySelector('.input-form')

    expect(JSON.parse(localStorage.getItem('todoTasks'))).toBeNull()
    addTask(inputForm);

    expect(JSON.parse(localStorage.getItem('todoTasks')).length).toBe(1)  
    inputForm.value = "task2"
    addTask(inputForm);

    expect(JSON.parse(localStorage.getItem('todoTasks')).length).toBe(2)  
  })

  test('If the input is empty, don\'t add to localStorage', ()=>{
    const inputForm = document.querySelector('.input-form')
    inputForm.value = '';

    expect(JSON.parse(localStorage.getItem('todoTasks'))).toBeNull()
    addTask(inputForm);
    expect(JSON.parse(localStorage.getItem('todoTasks'))).toBeNull()

  })

  test('adds task to DOM', () => {
    const inputForm = document.querySelector('.input-form')
    const allTasks = document.querySelector('.tasks')
    addTask(inputForm);
    createTasks(allTasks);
    expect(allTasks.children.length).toBe(1)

    inputForm.value = "task2"
    addTask(inputForm);
    createTasks(allTasks);
    expect(allTasks.children.length).toBe(2)
  })
})
