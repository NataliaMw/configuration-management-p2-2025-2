//  Develop a minimal REST API using Node.js and Express.
// It should provide endpoints to:
// GET /tasks — Retrieve all tasks
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 8080;
app.use(cors());
let tasks = [
  {
    id: 1,
    title: 'Crear el backend con Node.js y Express',
    completed: true
  },
  {
    id: 2,
    title: 'Implementar el endpoint GET /tasks',
    completed: true
  },
  {
    id: 3,
    title: 'Desarrollar el frontend para mostrar las tareas',
    completed: false
  }
];
app.get('/tasks', (req, res) => {
  console.log("Se ha recibido una petición GET en '/tasks'");
  res.json(tasks);
});
app.listen(PORT, () => {
  console.log(`El servidor del backend está funcionando en http://localhost:${PORT}`);
});
// POST /tasks — Add a new task
// PUT /tasks/:id — Mark a task as completed
// All backend code must be developed in a single file: index.js.
