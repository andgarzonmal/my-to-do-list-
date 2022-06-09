import { saveChanges } from '../modules/cleardelSave.js';

describe('Edit function', () => {
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

  test('Text Is Modified', () => {
    const event = {
      target: document.querySelector('.input-list'),
    };
    localStorage.setItem('todoTasks', JSON.stringify([{ index: 1, description: 'task1' }]));
    const input = document.querySelector('.input-list');
    expect(input.value).toBe('task1');
    input.value = 'Modified Task';
    saveChanges(event);
    const localItems = JSON.parse(localStorage.getItem('todoTasks'));
    expect(localItems[0].description).toBe(input.value);
  });
});
