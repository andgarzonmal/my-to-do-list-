import { del, clearAll } from '../modules/cleardelSave.js';

describe('Remove function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div>
     <ul class="tasks">
      <li>
        <i class='delete'></i>
      </li>
     </ul>
    </div>`;

    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
  });

  test('Removes an item from the DOM', () => {
    const list = document.querySelector('.tasks');
    expect(list.children.length).toBe(1);

    const event = {
      target: document.querySelector('.delete'),
    };
    del(event);

    expect(list.children.length).toBe(0);
  });

  test('Removes an item from the localStorage', () => {
    localStorage.setItem('todoTasks', JSON.stringify([{ index: 1 }]));
    expect(JSON.parse(localStorage.getItem('todoTasks')).length).toBe(1);

    const event = {
      target: document.querySelector('.delete'),
    };
    del(event);

    expect(JSON.parse(localStorage.getItem('todoTasks')).length).toBe(0);
  });
});

describe('Remove All Completed Tasks', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div>
     <ul class="tasks">
       <li class="list draggable dflex" id="1" draggable="true" data-id="ee" >
         <input type="checkbox" name="task" class="check" data-asign="1">
         <input type="text" class="input-list" value="task1">
       </li>
       <li class="list draggable dflex" id="2" draggable="true" data-id="ee" >
         <input type="checkbox" name="task" class="check" data-asign="2">
         <input type="text" class="input-list" value="task2">
       </li>
       <li class="list draggable dflex" id="3" draggable="true" data-id="ee" >
         <input type="checkbox" name="task" class="check" data-asign="3">
         <input type="text" class="input-list" value="task3">
       </li>
     </ul>
    </div>
    <button type="button" class="clear">clear all completed</button>`;

    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
  });

  test('Removes all completed items from the DOM', () => {
    const event = {
      target: document.querySelector('.clear'),
    };
    const newItems = [
      { index: 1, description: 'task1', completed: false },
      { index: 2, description: 'task2', completed: false },
      { index: 3, description: 'task3', completed: false },
    ];
    localStorage.setItem('todoTasks', JSON.stringify(newItems));
    const allChecks = document.querySelectorAll('.check');
    allChecks.forEach((check, i) => {
      if (i === 0 || i === 1) {
        check.checked = true;
      }
    });
    clearAll(event);
    const remainItems = document.querySelectorAll('.list');
    expect(remainItems.length).toBe(1);
  });

  test('Removes all completed items from localStorage', () => {
    const event = {
      target: document.querySelector('.clear'),
    };
    const newItems = [
      { index: 1, description: 'task1', completed: true },
      { index: 2, description: 'task2', completed: true },
      { index: 3, description: 'task3', completed: false },
    ];
    localStorage.setItem('todoTasks', JSON.stringify(newItems));
    const allChecks = document.querySelectorAll('.check');
    allChecks.forEach((check, i) => {
      if (i === 0 || i === 1) {
        check.checked = true;
      }
    });
    clearAll(event);
    const remainItems = JSON.parse(localStorage.getItem('todoTasks'));
    expect(remainItems.length).toBe(1);
  });
});
