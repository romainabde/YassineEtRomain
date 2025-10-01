
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}


function reset() {
  tasks = [];
  nextId = 1;
}

function addTask(name) {

  const task = {
    id: nextId++,          // id unique
    name: name.trim(),     // trim du nom
    done: false            // done par défaut
  };

  tasks.push(task);
  return task;
}

module.exports = { getTasks, reset, addTask, toggleTask };
