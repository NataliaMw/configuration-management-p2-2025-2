//  Develop a minimal REST API using Node.js and Express.
const express = require('express');
const app = express();

// Enable CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	next();
});

app.use(express.json());

const PORT = process.env.PORT || 8080;

//diccionario local para guardar la data
const tasks = {};
let nextId = 1;

// It should provide endpoints to:
// GET /tasks — Retrieve all tasks

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
	tasks[nextId] = task;
	nextId++;

	return res.status(201).json(task);
});

// GET /tasks — return all tasks

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});


// PUT /tasks/:id — Mark a task as completed
// All backend code must be developed in a single file: index.js.
