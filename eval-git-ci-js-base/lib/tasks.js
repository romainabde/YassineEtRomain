
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);

  task.done = !task.done;
  return task;
}

function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, toggleTask };
