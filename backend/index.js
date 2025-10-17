import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Almacenamiento en memoria
let tasks = {};
let nextId = 1;

// GET /tasks - Obtener todas las tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST /tasks - Crear nueva tarea
app.post('/tasks', (req, res) => {
    console.log('POST /tasks:', req.body);
    
    const { title } = req.body;
    
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
        return res.status(400).json({ error: 'Debe ingresar un título válido para la tarea' });
    }

    const id = nextId++;
    const newTask = {
        id,
        title: title.trim(),
        completed: false
    };
    
    tasks[id] = newTask;
    res.status(201).json(newTask);
});

// PUT /tasks/:id - Actualizar estado de tarea
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { completed } = req.body;
    
    console.log(`PUT /tasks/${id}:`, { completed });
    
    if (!tasks[id]) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'El campo completed debe ser boolean' });
    }

    tasks[id].completed = completed;
    res.json({ 
        message: 'Tarea actualizada correctamente', 
        task: tasks[id] 
    });
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint no encontrado' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});