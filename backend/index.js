import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = {};
let contid = 1;

app.get('/tasks', (req, res) => {
  res.json(tasks);
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
