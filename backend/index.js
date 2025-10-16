const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//CODIGO BASE (listo para versionar)

// Datos simulados (base de datos en memoria)
let tasks = [
  { id: 1, title: 'Aprender Git', completed: false },
  { id: 2, title: 'Configurar repositorio', completed: true }
];

// GET /tasks → devuelve todas las tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks → agrega una nueva tarea
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Title required' });
  const newTask = { id: tasks.length + 1, title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id → marca una tarea como completada
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  task.completed = true;
  res.json(task);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
