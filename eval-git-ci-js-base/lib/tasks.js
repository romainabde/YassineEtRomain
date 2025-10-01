
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

function countDone() {
  return tasks.filter(t => t.done).length;
}

module.exports = { getTasks, reset, countDone };
