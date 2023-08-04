const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.text());

app.get('/', (req, res) => {
  res.send('¡Hola, bienvenido a mi servidor Express!');
});

app.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params.nombre;
  res.send(`Hola, ${nombre}!`);
});

app.post('/post', (req, res) => {
  console.log('post', req.body)
  res.send('Se hizo un post.');
});

app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
