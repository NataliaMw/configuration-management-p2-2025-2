const express = require('express');
const cors = require('cors');
const app = express();
const PORT=3000;
app.use(cors());
app.use(express.json());


let tasks = [
    { id: 1, title: 'Presentación ppt - Inglés', completed: false },
    { id: 2, title: 'Taller grupal - ING II', completed: true },
    { id: 3, title: 'Terminar AWS - Sistemas distribuidos', completed: false },
    { id: 4, title: 'Estudiar para examen - Cálculo', completed: false },
    { id: 5, title: 'Entregar proyecto final - DAWM', completed: false },
];
let nextId = 6;

//GET
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

//POST
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'El nombre de la tarea es requerido' });
    }
    const nuevaTarea = {
        id: nextId++,
        title: title.trim(),
        completed: false
    };
    tasks.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t=> t.id===taskId);
    if (!task) {
        return res.status(404).send({ message: 'Task not found' });
    }
    task.completed = true;
    res.json(task);   
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});