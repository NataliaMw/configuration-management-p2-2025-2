// Servidor Node.js con Express para Task Tracker
// Backend 1: Endpoint GET /tasks
// Backend 2: Endpoints POST /tasks y PUT /tasks/:id

const express = require('express');
const cors = require('cors');

// Inicializar la aplicación Express
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Permitir solicitudes desde cualquier origen
app.use(express.json()); // Para parsear JSON en el body de las solicitudes

// Base de datos en memoria - Array de tareas
// Cada tarea tiene: id (único), description (string), completed (boolean)
let tasks = [
  { id: 1, description: 'Comprar leche', completed: false },
  { id: 2, description: 'Pasear al perro', completed: true },
  { id: 3, description: 'Estudiar Git', completed: false }
];

// Variable para generar IDs únicos
let nextId = 4;

// ========================================
// ENDPOINT: GET /tasks
// Descripción: Recuperar todas las tareas
// Desarrollador: Backend 1
// ========================================
app.get('/tasks', (req, res) => {
  try {
    // Devolver el array completo de tareas
    res.status(200).json(tasks);
    console.log('✓ Tareas recuperadas exitosamente');
  } catch (error) {
    // Manejo de errores
    console.error('Error al recuperar tareas:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor al recuperar tareas' 
    });
  }
});

// ========================================
// ENDPOINT: POST /tasks
// Descripción: Añadir una nueva tarea
// Desarrollador: Backend 2
// ========================================
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
  console.log('✓ Nueva tarea creada:', newTask);
  res.status(201).json(newTask);
});

// ========================================
// ENDPOINT: PUT /tasks/:id
// Descripción: Marcar una tarea como completada
// Desarrollador: Backend 2
// ========================================
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
  console.log('✓ Tarea actualizada:', tasks[taskIndex]);
  res.json(tasks[taskIndex]);
});

// ========================================
// INICIAR SERVIDOR
// ========================================
app.listen(PORT, () => {
  console.log(`🚀 Servidor Task Tracker ejecutándose en http://localhost:${PORT}`);
  console.log(`📝 Endpoints disponibles:`);
  console.log(`   - GET  http://localhost:${PORT}/tasks`);
  console.log(`   - POST http://localhost:${PORT}/tasks`);
  console.log(`   - PUT  http://localhost:${PORT}/tasks/:id`);
  console.log(`💾 Tareas en memoria: ${tasks.length}`);
});

// Manejo de errores no capturados
process.on('unhandledRejection', (error) => {
  console.error('Error no manejado:', error);
});
