// -------------------------------
// === (A) GET /tasks — Developer A ===
// Devuelve todas las tareas sin mutar estado
// -------------------------------
app.get('/tasks', (req, res) => {
  // Opcional: soportar filtros simples por query (?completed=true|false)
  const { completed } = req.query;

  if (typeof completed === 'string') {
    const flag = completed.toLowerCase();
    if (flag !== 'true' && flag !== 'false') {
      return res.status(400).json({ error: 'completed debe ser true o false' });
    }
    const want = flag === 'true';
    const filtered = tasks.filter(t => t.completed === want);
    return res.json(filtered);
  }

  // Respuesta por defecto: todo el arreglo
  res.json(tasks);
// backend/index.js
// Mini API REST en un SOLO archivo (Express) — requerido por la práctica :contentReference[oaicite:1]{index=1}

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ==== Datos en memoria (para la práctica) ====
// Estructura mínima de una tarea
// { id: number, title: string, completed: boolean }
let tasks = [
  { id: 1, title: 'Primera tarea de ejemplo', completed: false },
  { id: 2, title: 'Leer requirements del proyecto', completed: false },
];
let nextId = 3;

// Util: buscar índice por id
function idxById(id) {
  return tasks.findIndex(t => t.id === id);
}

// -------------------------------
// === (B) POST /tasks — Developer B ===
// Crea una nueva tarea: { "title": "..." }
// -------------------------------
app.post('/tasks', (req, res) => {
  const { title } = req.body || {};
  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'title es requerido (string no vacío)' });
  }
  const newTask = { id: nextId++, title: title.trim(), completed: false };
  tasks.push(newTask);
  // Sugerencia Dev B: devolver 201 + ubicación si quiere
  res.status(201).json(newTask);
});


// -------------------------------
// === (C) PUT /tasks/:id — Developer C ===
// Marca una tarea como completada (completed: true)
// -------------------------------
app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'id inválido' });
  }
  const i = idxById(id);
  if (i === -1) {
    return res.status(404).json({ error: 'task no encontrada' });
  }

  //marca como completada (según el enunciado)
  tasks[i].completed = true;
  return res.json(tasks[i]); // <-- responde con la tarea actualizada

});

// Salud simple
app.get('/', (_req, res) => {
  res.send('Task API viva ✅');
});

// Arrancar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});