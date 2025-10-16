import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = {};
let contid = 1;

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.put('/tasks/:id/', (req, res) => {
  const id = req.params.id;
  if (!tasks[id]) {
    return res.status(404).json({ error: 'Task not found' });
  }
  tasks[id].completed = true;
  res.json({ message: 'Task updated', task: tasks[id] });
});

app.post('/tasks', (req, res) => {
  let {name} = req.body;
  if(!name) return res.status(400).json({ error: 'Debe ingresar un nombre' });
  let id = contid++;
  tasks[id] = {name, completed: false};
  res.status(201).json({name, completed: false});
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
