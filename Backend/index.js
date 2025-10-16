//  Develop a minimal REST API using Node.js and Express.
// It should provide endpoints to:
// GET /tasks — Retrieve all tasks
// POST /tasks — Add a new task
// PUT /tasks/:id — Mark a task as completed
// All backend code must be developed in a single file: index.js.
const express = require('express');
const app = express();

let tasks = [
    { id: 1, title: 'task 1', completed: false },
    { id: 2, title: 'task 2', completed: false },
    { id: 3, title: 'task 3', completed: false }
];

app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        // Task not found
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks[taskIndex].completed = true;
    res.json(tasks[taskIndex]);
});