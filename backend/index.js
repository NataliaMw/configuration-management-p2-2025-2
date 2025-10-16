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


// ======================================================
// Parte final - Iniciar el servidor local
// ======================================================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});