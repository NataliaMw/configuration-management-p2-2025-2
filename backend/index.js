const express = require('express');
const cors = require('cors');
const app = express();
const PORT=3000;

app.use(cors());
app.use(express.json());

let tasks =[
    { id: 1, title: 'Task 1', completed: true },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false },
];

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