//  Develop a minimal REST API using Node.js and Express.
const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

// It should provide endpoints to:
// GET /tasks — Retrieve all tasks
const cors = require('cors');
app.use(cors());

//diccionario local para guardar la data
let tasks = [
  {
    id: 1,
    title: 'Crear el backend con Node.js y Express',
    completed: true
  },
  {
    id: 2,
    title: 'Implementar el endpoint GET /tasks',
    completed: true
  },
  {
    id: 3,
    title: 'Desarrollar el frontend para mostrar las tareas',
    completed: false
  }
];

let nextId = 1;

app.get('/tasks', (req, res) => {
  console.log("Se ha recibido una petición GET en '/tasks'");
  res.json(tasks);
});

// POST /tasks — add a new task
app.post('/tasks', (req, res) => {
	const { title, description } = req.body || {};

	if (!title || typeof title !== 'string' || !title.trim()) {
		return res.status(400).json({ error: 'El titulo es requerido' });
	}
	
	const task = {
		id: nextId,
		title: title.trim(),
		description: description ? String(description) : '',
		completed: false,
		createdAt: new Date().toISOString(),
	};

	//guardar localmente en el diccionario
  tasks.push(task);
  nextId++;


	return res.status(201).json(task);
});

// GET /tasks — return all tasks

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});


// PUT /tasks/:id — Mark a task as completed
// All backend code must be developed in a single file: index.js.
