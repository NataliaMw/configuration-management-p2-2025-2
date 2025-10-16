// Developer A (Zaruma): Implementar GET /tasks
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Examples (Solo de prueba)
let tasks = [
  { id: 1, title: 'Estudiar Git', completed: false },
  { id: 2, title: 'Hacer Deberes', completed: true },
  { id: 3, title: 'Preparar exposición', completed: false }
];

// Endpoint GET /tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Server
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
