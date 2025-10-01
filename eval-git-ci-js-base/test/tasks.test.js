const { getTasks, reset, countDone } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

describe('countDone', () => {
  beforeEach(() => {
    reset();
  });

  test('retourne 0 quand aucune tâche', () => {
    expect(countDone()).toBe(0);
  });

  test('compte uniquement les tâches faites', () => {
    const tasks = getTasks();
    tasks.push({ id: 1, name: "Tâche 1", done: false });
    tasks.push({ id: 2, name: "Tâche 2", done: true });
    tasks.push({ id: 3, name: "Tâche 3", done: true });

    expect(countDone()).toBe(2);
  });
});
