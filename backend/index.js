// Team Task Tracker - Backend Server
// Merged version: zaruma/group-6 + group-6

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ========== MIDDLEWARES ==========
app.use(express.json());
app.use(cors());

// Serve frontend static files (zaruma/group-6)
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// ========== DATA STORE ==========
// Merged initial tasks from both versions
let tasks = [
  { id: 1, title: 'Estudiar Git', completed: false },
  { id: 2, title: 'Hacer Deberes', completed: true },
  { id: 3, title: 'Preparar exposición', completed: false },
  { id: 4, title: 'Example task', completed: false }
];

// ========== API ENDPOINTS ==========

// GET /tasks - Obtener todas las tareas (Developer A - Zaruma & group-6)
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks - Crear nueva tarea (group-6)
app.post('/tasks', (req, res) => {
  const { title, name } = req.body;
  
  // Acepta tanto 'title' como 'name' para compatibilidad con frontend
  const taskTitle = title || name;
  
  if (!taskTitle) {
    return res.status(400).json({ error: 'Title or name is required' });
  }
  
  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: taskTitle,
    name: taskTitle, // Incluir ambos campos para compatibilidad
    completed: false
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - Marcar tarea como completada (group-6 - Developer C)
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  // Toggle completed status
  task.completed = !task.completed;
  
  res.json(task);
});

// DELETE /tasks/:id - Eliminar tarea (endpoint adicional útil)
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  const deletedTask = tasks.splice(taskIndex, 1);
  res.json({ message: 'Task deleted', task: deletedTask[0] });
});

// GET / - Ruta principal (sirve el frontend)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// ========== ERROR HANDLING ==========
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// ========== START SERVER ==========
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📋 API disponible en http://localhost:${PORT}/tasks`);
  console.log(`🌐 Frontend disponible en http://localhost:${PORT}`);
});

module.exports = app;