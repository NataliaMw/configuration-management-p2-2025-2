import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});


app.post('/echo', (req, res) => {
  res.json({ you_sent: req.body });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
