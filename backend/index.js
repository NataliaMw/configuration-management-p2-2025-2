const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let tasks = [
  { id: 1, description: 'Tarea de ejemplo 1', completed: false },
  { id: 2, description: 'Tarea de ejemplo 2', completed: true }
];

// Contador para IDs únicos
let nextId = 3;

// POST /tasks - Añadir una nueva tarea
app.post('/tasks', (req, res) => {
  const { description } = req.body;

  // Validación: verificar que description no esté vacía
  if (!description || description.trim() === '') {
    return res.status(400).json({ 
      error: 'La descripción de la tarea no puede estar vacía' 
    });
  }

  // Crear nueva tarea
  const newTask = {
    id: nextId++,
    description: description.trim(),
    completed: false
  };

  // Añadir a la lista de tareas
  tasks.push(newTask);

  // Devolver la tarea creada con código 201
  res.status(201).json(newTask);
});

// PUT /tasks/:id - Marcar una tarea como completada
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  // Validación: verificar que el ID sea un número válido
  const taskId = parseInt(id);
  if (isNaN(taskId)) {
    return res.status(400).json({ 
      error: 'El ID proporcionado no es un número válido' 
    });
  }

  // Buscar la tarea por ID
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  // Si la tarea no existe, devolver 404
  if (taskIndex === -1) {
    return res.status(404).json({ 
      error: `No se encontró la tarea con ID ${taskId}` 
    });
  }

  // Actualizar el estado de la tarea
  tasks[taskIndex].completed = completed !== undefined ? completed : true;

  // Devolver la tarea actualizada
  res.json(tasks[taskIndex]);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend ejecutándose en http://localhost:${PORT}`);
});
