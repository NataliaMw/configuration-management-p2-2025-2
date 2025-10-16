// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


// Developer C: PUT /tasks/:id - marca una tarea como completada
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) return res.status(404).json({ error: 'Task not found' });

  task.completed = true;
  res.json({ message: 'Task marked as completed', task });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
