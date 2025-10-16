// -------------------------------
// === (A) GET /tasks — Developer A ===
// Devuelve todas las tareas sin mutar estado
// -------------------------------
app.get('/tasks', (req, res) => {
  // Opcional: soportar filtros simples por query (?completed=true|false)
  const { completed } = req.query;

  if (typeof completed === 'string') {
    const flag = completed.toLowerCase();
    if (flag !== 'true' && flag !== 'false') {
      return res.status(400).json({ error: 'completed debe ser true o false' });
    }
    const want = flag === 'true';
    const filtered = tasks.filter(t => t.completed === want);
    return res.json(filtered);
  }

  // Respuesta por defecto: todo el arreglo
  res.json(tasks);
});