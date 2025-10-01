const { getTasks, reset, toggleTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

describe('toggleTask', () => {
  beforeEach(() => {
    reset();
    getTasks().push({ id: 1, name: "Test", done: false });
  });

  test('inverse le champ done', () => {
    const task = getTasks()[0];

    expect(task.done).toBe(false);

    toggleTask(1);
    expect(task.done).toBe(true);

    toggleTask(1);
    expect(task.done).toBe(false);
  });
});