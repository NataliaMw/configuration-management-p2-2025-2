// Servidor Node.js con Express para Task Tracker
// Desarrollador Backend 1: Endpoint GET /tasks

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
// ENDPOINTS PENDIENTES (Backend 2)
// ========================================

// POST /tasks - Añadir nueva tarea (Backend Developer 2)
// PUT /tasks/:id - Marcar tarea como completada (Backend Developer 2)

// ========================================
// INICIAR SERVIDOR
// ========================================
app.listen(PORT, () => {
  console.log(`🚀 Servidor Task Tracker ejecutándose en http://localhost:${PORT}`);
  console.log(`📝 Endpoint disponible: GET http://localhost:${PORT}/tasks`);
  console.log(`💾 Tareas en memoria: ${tasks.length}`);
});

// Manejo de errores no capturados
process.on('unhandledRejection', (error) => {
  console.error('Error no manejado:', error);
});