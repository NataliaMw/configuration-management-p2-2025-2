
// ===============================
// BACKEND - TASK TRACKER API
// Grupo 1
// ===============================

// Importar dependencias
const express = require('express');
const cors = require('cors');

// Inicializar aplicación Express
const app = express();
app.use(cors());
app.use(express.json());

// -------------------------------
// Datos simulados (base temporal en memoria)
// -------------------------------
let tasks = [
  { id: 1, title: 'Aprender Git', completed: false },
  { id: 2, title: 'Configurar repositorio', completed: true }
];

// ======================================================
// PARTE 1 - JOHN ULLAGUARI
// Servidor base y endpoint GET /tasks
// ======================================================

// GET /tasks → Devuelve todas las tareas existentes
app.get('/tasks', (req, res) => {
  res.json(tasks);
});
//Develops _the POST 
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'El campo "title" es requerido.' });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Creates the PUT /tasks
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Tarea no encontrada.' });
  }

  task.completed = true;
  res.json(task);

// ======================================================
// Parte final - Iniciar el servidor local
// ======================================================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});