const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// almacenamiento de datos
let tasks = [
  { id: 1, title: 'Estudiar Git', completed: false },
  { id: 2, title: 'Hacer Deberes', completed: true },
  { id: 3, title: 'Preparar exposición', completed: false },
  { id: 4, title: 'Example task', completed: false }
];

// endpoints de la API

// Developer A: obtener todas las tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Developer B: crear una nueva tarea
app.post('/tasks', (req, res) => {
  const { title, name } = req.body;
  const taskTitle = title || name;

  if (!taskTitle) {
    return res.status(400).json({ error: 'Title or name is required' });
  }

  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: taskTitle,
    name: taskTitle,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Developer C: marcar tarea como completada
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Marca la tarea como completada
  task.completed = true;

  res.json({
    message: `Task "${task.title}" marked as completed`,
    task
  });
});

// endpoint para eliminar
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const deleted = tasks.splice(index, 1);
  res.json({ message: 'Task deleted', task: deleted[0] });
});

// Servir el frontend desde /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// manejo de errores
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// iniciar servidores
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`API disponible en http://localhost:${PORT}/tasks`);
  console.log(`Frontend disponible en http://localhost:${PORT}`);
});

module.exports = app;
