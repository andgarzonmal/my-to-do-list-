import { TestEnvironment } from 'jest-environment-jsdom';
import changeStatus from '../modules/ChangeStatus.js';

describe('Remove function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div>
      <ul class="tasks">
        <li>
          <input type="checkbox" name="task" class="check">
          <input type="text" class="input-list" value="task1">
          <i class="material-icons dots">
            more_vert
          </i>
          <i class="material-icons delete" >
            delete
          </i>
        </li>
      </ul>
    </div>`;

    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
  });

  test('change status on locaStorage to true', () => {
    localStorage.setItem('todoTasks', JSON.stringify([{ index: 1, description: 'task1', completed: false }]));
    const checked = document.querySelector('.check')
    const event = {
      target: document.querySelector('.check'),
    };
    checked.checked = true
    changeStatus(event)
    const localItems = JSON.parse(localStorage.getItem('todoTasks'));
    expect(localItems[0].completed).toBe(true);
  });

  test('change status on locaStorage to false', () => {
    localStorage.setItem('todoTasks', JSON.stringify([{ index: 1, description: 'task1', completed: true }]));
    const checked = document.querySelector('.check')
    const event = {
      target: document.querySelector('.check'),
    };
    checked.checked = false
    changeStatus(event)
    const localItems = JSON.parse(localStorage.getItem('todoTasks'));
    expect(localItems[0].completed).toBe(false);
  });
});
