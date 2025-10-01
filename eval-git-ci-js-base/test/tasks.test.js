const { getTasks, reset, addTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});


describe('addTask', () => {
  test('ajoute une tâche avec name trimé et done = false', () => {
    const task = addTask('  Acheter du pain  ');

    // Vérifie que la tâche a bien le nom trimé
    expect(task.name).toBe('Acheter du pain');

    // Vérifie que done est false
    expect(task.done).toBe(false);

    // Vérifie que l'id existe
    expect(task).toHaveProperty('id');
  });
});