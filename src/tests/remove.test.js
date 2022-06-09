import { del } from '../modules/cleardelSave.js';

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


