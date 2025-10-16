import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = {};

app.put('/tasks/:id/', (req, res) => {
  const id = req.params.id;

  if (!tasks[id]) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[id].completed = true;

  res.json({ message: 'Task updated', task: tasks[id] });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
