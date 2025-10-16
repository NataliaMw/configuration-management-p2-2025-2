import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

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
    console.log(req.body);
  let title = req.body.title;
  if(!title) return res.status(400).json({ error: 'Debe ingresar un nombre' });
  let id = contid++;
  tasks[id] = {title: title, completed: false};
  res.status(201).json(tasks[id]);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
